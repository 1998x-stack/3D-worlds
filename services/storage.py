"""Immutable SHA-256 object store with local filesystem and private S3/MinIO backends."""
from __future__ import annotations
import hashlib
import os
from pathlib import Path
import re
import shutil
import tempfile

ROOT = Path(__file__).resolve().parents[1]
SHA = re.compile(r"^[0-9a-f]{64}$")


def key_for(sha256: str, ext: str = "glb") -> str:
    if not SHA.fullmatch(sha256):
        raise ValueError("Invalid SHA-256")
    if ext not in {"glb", "webp", "avif"}:
        raise ValueError("Unsupported object extension")
    return f"sha256/{sha256[:2]}/{sha256}.{ext}"


def checksum(path: Path) -> str:
    digest = hashlib.sha256()
    with Path(path).open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


class LocalStore:
    """Filesystem backend for testing and single-host deployments."""
    def __init__(self, root: Path):
        self.root = Path(root).resolve()

    def path(self, sha: str, ext: str = "glb") -> Path:
        return self.root / key_for(sha, ext)

    def put_file(self, source: Path, sha: str, ext: str = "glb") -> str:
        source = Path(source)
        if checksum(source) != sha:
            raise ValueError("SHA-256 mismatch: refusing upload")
        dest = self.path(sha, ext)
        dest.parent.mkdir(parents=True, exist_ok=True)
        if dest.exists():
            if checksum(dest) != sha:
                raise ValueError("Existing object has wrong checksum")
            return key_for(sha, ext)
        fd, temporary = tempfile.mkstemp(prefix=".upload-", dir=dest.parent)
        os.close(fd)
        try:
            shutil.copyfile(source, temporary)
            if checksum(Path(temporary)) != sha:
                raise ValueError("Staging checksum mismatch")
            # Never overwrite a separately published immutable object.
            if not dest.exists():
                os.replace(temporary, dest)
        finally:
            Path(temporary).unlink(missing_ok=True)
        return key_for(sha, ext)

    def exists(self, sha: str, ext: str = "glb") -> bool:
        path = self.path(sha, ext)
        return path.is_file() and checksum(path) == sha


class S3Store:
    """S3-compatible private bucket via boto3. Requires credentials in environment."""
    def __init__(self, bucket: str, endpoint_url: str | None = None, region: str = "us-east-1"):
        if not bucket:
            raise ValueError("THREED_WORLDS_S3_BUCKET required")
        try:
            import boto3
            from botocore.config import Config
        except ImportError as exc:
            raise RuntimeError("pip install -r requirements-api.txt for S3 support") from exc
        self.bucket = bucket
        self.client = boto3.client(
            "s3", endpoint_url=endpoint_url or None, region_name=region,
            config=Config(signature_version="s3v4", s3={"addressing_style": "path"})
        )

    def put_file(self, source: Path, sha: str, ext: str = "glb") -> str:
        if checksum(source) != sha:
            raise ValueError("SHA-256 mismatch")
        key = key_for(sha, ext)
        # Immutable, deterministic key; repeated uploads are idempotent.
        with Path(source).open("rb") as handle:
            self.client.upload_fileobj(
                handle, self.bucket, key,
                ExtraArgs={"ContentType": {
                    "glb": "model/gltf-binary", "webp": "image/webp", "avif": "image/avif"
                }[ext], "Metadata": {"sha256": sha}, "CacheControl": "public,max-age=31536000,immutable"}
            )
        return key

    def signed_url(self, sha: str, ext: str = "glb", expires: int = 900) -> str:
        return self.client.generate_presigned_url(
            "get_object", Params={"Bucket": self.bucket, "Key": key_for(sha, ext)},
            ExpiresIn=max(60, min(expires, 3600))
        )


def from_environment():
    backend = os.environ.get("THREED_WORLDS_STORE", "local").lower()
    if backend == "local":
        return LocalStore(Path(os.environ.get(
            "THREED_WORLDS_LOCAL_STORE", ROOT / ".cache" / "object-store"
        )))
    if backend == "s3":
        return S3Store(
            bucket=os.environ.get("THREED_WORLDS_S3_BUCKET", ""),
            endpoint_url=os.environ.get("THREED_WORLDS_S3_ENDPOINT") or None,
            region=os.environ.get("AWS_DEFAULT_REGION", "us-east-1")
        )
    raise ValueError("THREED_WORLDS_STORE must be local or s3")
