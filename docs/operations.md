# Deployment, release index and security operations

## Scope and trust boundary

GitHub Pages hosts static site files only. `services/search_api.py` is optional infrastructure and should not be exposed publicly without TLS, authenticated gateway access, firewall boundaries and operational monitoring.

- The search API requires `THREED_WORLDS_API_TOKEN` when bound outside loopback, unless the explicit **local-only Docker-compose** flag `THREED_WORLDS_ALLOW_UNAUTHENTICATED_PRIVATE=1` is set. Never use this override for an internet-facing host.
- Set `THREED_WORLDS_RATE_LIMIT_PER_MIN` for a process-local IP limit, e.g. `120`. This is not a distributed abuse-control service; a gateway/CDN must enforce production policies.
- Token-protected `/metrics` exposes aggregate request codes, bytes and uptime only; `/healthz` is intentionally unauthenticated. Search query strings and cursor values are not printed in request logs.
- Never hardcode the API bearer token into public GitHub Pages JavaScript. Use an authenticated reverse proxy/session gateway that keeps the token server-side. Add proper client authentication and CORS policies there.
- Read-only GLB responses are streamed in chunks, with SHA-based immutable ETags and optional 304 responses. The object-store checksum gate remains enabled.

## Reproducible release manifest

```bash
python scripts/export_static_catalog.py
npm run generate:assets
node scripts/verify_generated.mjs
node scripts/release_index.mjs
npm run build
```

`public/release/manifest.json` is generated, not checked in. It contains the exact catalog SHA, current source revision, every exported WebP/AVIF digest, all three GLB LOD hashes and the static shard count. CI must fail on missing or mismatched outputs. The manifest records **geometry/rendering artifacts only**; it is not evidence of measured wall thickness, assembly fit, material strength or physical printing.

## Operational acceptance

Monitor `/healthz`, authenticated `/metrics`, HTTP 5xx/429 trends, immutable object checksums, build artifact retention, and current catalog-versus-release asset parity. Treat database as a reproducible projection and back up **source records and human physical inspection evidence** separately. The 3D Worlds Git repository is not a general production auth provider.
