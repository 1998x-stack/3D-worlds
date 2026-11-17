#!/usr/bin/env python3
"""Audited full-resolution GLB -> STL and 3MF manufacturing geometry candidates.

The result is NOT a certification of physical printability.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import re
import sys
import xml.etree.ElementTree as ET
from pathlib import Path
from zipfile import ZIP_DEFLATED, ZipFile, ZipInfo

try:
    import numpy as np
    import trimesh
except ImportError as exc:
    raise SystemExit('Install dependencies: pip install -r requirements-print.txt') from exc

ROOT = Path(__file__).resolve().parents[1]
CORE = 'http://schemas.microsoft.com/3dmanufacturing/core/2015/02'
RELS = 'http://schemas.openxmlformats.org/package/2006/relationships'
CONTENT_TYPES = 'http://schemas.openxmlformats.org/package/2006/content-types'
ET.register_namespace('', CORE)


def read_asset(asset_id: str) -> tuple[Path, str, dict]:
    manifest = json.loads((ROOT / 'catalog/models.json').read_text(encoding='utf-8'))
    asset = next((v for v in manifest['assets'] if v['id'] == asset_id), None)
    if not asset:
        raise ValueError(f'Unknown asset ID: {asset_id}')
    if asset['kind'] == 'procedural':
        source = ROOT / '.cache/raw' / (asset['slug'] + '.glb')
    else:
        source = ROOT / asset['binary_path']
    return source, asset['slug'], asset


def load_meshes(input_path: Path) -> list[trimesh.Trimesh]:
    if input_path.suffix.lower() != '.glb':
        raise ValueError('Input must be a full-resolution .glb (not LOD1/LOD2)')
    if not input_path.is_file():
        raise FileNotFoundError(f'{input_path} — first run npm run generate:assets')
    scene = trimesh.load(input_path, force='scene', process=False)
    # Scene.dump bakes the GLB node/instance transformations.
    meshes = list(scene.dump(concatenate=False))
    if not meshes or any(not isinstance(m, trimesh.Trimesh) for m in meshes):
        raise ValueError('GLB must contain triangular mesh geometry only')
    return meshes


def normalize(meshes: list[trimesh.Trimesh], target_mm: float | None,
              repair_normals: bool) -> tuple[list[trimesh.Trimesh], dict]:
    items = []
    for source in meshes:
        mesh = source.copy()
        # glTF splits coordinates for textures/normals; weld geometric vertices.
        mesh.merge_vertices()
        mesh.update_faces(mesh.nondegenerate_faces())
        mesh.update_faces(mesh.unique_faces())
        mesh.remove_unreferenced_vertices()
        if repair_normals:
            mesh.fix_normals()
        if not len(mesh.faces) or not np.isfinite(mesh.vertices).all():
            raise ValueError('Empty/nonfinite mesh after canonicalization')
        items.append(mesh)
    # Original model coordinates: meters Y-up. Slicer output: mm Z-up.
    rotate = trimesh.transformations.rotation_matrix(math.pi / 2, (1, 0, 0))
    for mesh in items:
        mesh.apply_transform(rotate)
        mesh.apply_scale(1000.0)
    lower = np.min([m.bounds[0] for m in items], axis=0)
    upper = np.max([m.bounds[1] for m in items], axis=0)
    original_mm = upper - lower
    if target_mm is not None:
        if not math.isfinite(target_mm) or target_mm <= 0:
            raise ValueError('--longest-mm must be finite and positive')
        factor = target_mm / float(max(original_mm))
        for mesh in items:
            mesh.apply_scale(factor)
    else:
        factor = 1.0
    lower = np.min([m.bounds[0] for m in items], axis=0)
    for mesh in items:
        mesh.apply_translation(-lower)
    lower = np.min([m.bounds[0] for m in items], axis=0)
    upper = np.max([m.bounds[1] for m in items], axis=0)
    return items, {
        'source_dimensions_mm': original_mm.tolist(),
        'scale_relative_to_source': factor,
        'dimensions_mm': (upper - lower).tolist(),
        'bounds_min_mm': lower.tolist(),
        'bounds_max_mm': upper.tolist(),
    }


def audit(meshes: list[trimesh.Trimesh], max_triangles: int,
          bed_mm: list[float] | None) -> tuple[list[dict], list[str], list[str]]:
    errors, warnings, parts = [], [], []
    total = sum(len(m.faces) for m in meshes)
    if total > max_triangles:
        errors.append(f'triangle_budget_exceeded: {total}>{max_triangles}')
    for i, mesh in enumerate(meshes):
        closed = bool(mesh.is_watertight)
        consistent = bool(mesh.is_winding_consistent)
        # Volume may be unreliable for open surfaces; this is itself a blocker.
        volume = float(mesh.volume) if closed else 0.0
        degenerate = int((~mesh.nondegenerate_faces()).sum())
        parts.append({
            'index': i, 'triangles': int(len(mesh.faces)),
            'vertices': int(len(mesh.vertices)), 'watertight': closed,
            'winding_consistent': consistent, 'signed_volume_mm3': volume,
            'degenerate_faces': degenerate, 'bounds_mm': mesh.extents.tolist(),
        })
        if not closed:
            errors.append(f'part_{i}:open_or_nonmanifold_mesh')
        if not consistent:
            errors.append(f'part_{i}:inconsistent_winding')
        if not math.isfinite(volume) or volume <= 1e-9:
            errors.append(f'part_{i}:nonpositive_volume')
        if degenerate:
            errors.append(f'part_{i}:degenerate_faces')
    if bed_mm:
        lower = np.min([m.bounds[0] for m in meshes], axis=0)
        upper = np.max([m.bounds[1] for m in meshes], axis=0)
        if any(upper[j] - lower[j] > bed_mm[j] + 1e-6 for j in range(3)):
            errors.append('does_not_fit_specified_build_volume')
    if len(meshes) > 1:
        warnings.append('Individual closed parts may overlap or merely touch. '
                        'Cross-part intersections and structural attachment are NOT certified.')
    warnings.append('Wall thickness, fine features, trapped volumes, overhangs, '
                    'supports, tolerances, material and orientation need slicer review.')
    return parts, errors, warnings


def _write_zip(archive: ZipFile, name: str, content: bytes) -> None:
    info = ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
    info.compress_type = ZIP_DEFLATED
    archive.writestr(info, content)


def _xml(root: ET.Element) -> bytes:
    return ET.tostring(root, encoding='utf-8', xml_declaration=True)


def export_3mf(path: Path, meshes: list[trimesh.Trimesh], title: str) -> None:
    """Write a minimum interoperable 3MF Core geometry package in millimeters."""
    model = ET.Element(f'{{{CORE}}}model', {
        'unit': 'millimeter',
        '{http://www.w3.org/XML/1998/namespace}lang': 'en-US',
    })
    ET.SubElement(model, f'{{{CORE}}}metadata', {'name': 'Title'}).text = title
    resources = ET.SubElement(model, f'{{{CORE}}}resources')
    build = ET.SubElement(model, f'{{{CORE}}}build')
    for i, mesh in enumerate(meshes, start=1):
        obj = ET.SubElement(resources, f'{{{CORE}}}object', {
            'id': str(i), 'type': 'model', 'name': f'{title}-part-{i:03d}',
        })
        body = ET.SubElement(obj, f'{{{CORE}}}mesh')
        vertices = ET.SubElement(body, f'{{{CORE}}}vertices')
        for vertex in mesh.vertices:
            ET.SubElement(vertices, f'{{{CORE}}}vertex', dict(zip(
                ('x', 'y', 'z'), (format(float(v), '.9g') for v in vertex))))
        triangles = ET.SubElement(body, f'{{{CORE}}}triangles')
        for face in mesh.faces:
            ET.SubElement(triangles, f'{{{CORE}}}triangle', dict(zip(
                ('v1', 'v2', 'v3'), (str(int(v)) for v in face))))
        ET.SubElement(build, f'{{{CORE}}}item', {'objectid': str(i)})
    types = ET.Element('Types', xmlns=CONTENT_TYPES)
    ET.SubElement(types, 'Default', {
        'Extension': 'rels',
        'ContentType': 'application/vnd.openxmlformats-package.relationships+xml'})
    ET.SubElement(types, 'Override', {
        'PartName': '/3D/3dmodel.model',
        'ContentType': 'application/vnd.ms-package.3dmanufacturing-3dmodel+xml'})
    rels = ET.Element('Relationships', xmlns=RELS)
    ET.SubElement(rels, 'Relationship', {
        'Target': '/3D/3dmodel.model', 'Id': 'rel0',
        'Type': 'http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel'})
    with ZipFile(path, 'w') as archive:
        _write_zip(archive, '[Content_Types].xml', _xml(types))
        _write_zip(archive, '_rels/.rels', _xml(rels))
        _write_zip(archive, '3D/3dmodel.model', _xml(model))


def read_profile(profile_id: str) -> dict:
    """Profiles describe the equipment envelope and reviewer guidance, never a certification."""
    data = json.loads((ROOT / 'catalog/print_policy.json').read_text(encoding='utf-8'))
    try:
        entry = data['printers'][profile_id]
    except KeyError as exc:
        raise ValueError(f'Unknown print profile: {profile_id}') from exc
    return {**entry, 'id': profile_id}


def geometry_guidance(meshes: list[trimesh.Trimesh], profile: dict,
                      desired_clearance_mm: float | None) -> tuple[dict, list[str]]:
    """Conservative bbox and surface indicators; no actual wall/contact validation."""
    warnings: list[str] = []
    minimum = float(min(float(min(m.extents)) for m in meshes))
    feature = profile.get('feature_hint_mm')
    if feature is not None and minimum < feature:
        warnings.append(
            f'small_component_bbox_extent: {minimum:.3f}mm < '
            f'{feature:.3f}mm guideline; not a true wall-thickness test')
    faces = sum(len(m.faces) for m in meshes)
    down_faces = 0
    bottom = min(float(m.bounds[0][2]) for m in meshes)
    for mesh in meshes:
        # Exclude triangles very close to print bed; this is not a support generator.
        centers = mesh.triangles_center
        normals = mesh.face_normals
        down_faces += int(np.sum(
            (normals[:, 2] < -math.cos(math.pi / 4))
            & (centers[:, 2] > bottom + 0.5)))
    ratio = down_faces / max(1, faces)
    if ratio > 0.02:
        warnings.append(
            f'downward_faces_above_bed: {ratio:.1%} of triangles '
            'are downward-facing; support requirement is not determined')
    potential_overlap = 0
    # Bounding boxes can overlap even when parts themselves do not intersect.
    for i, left in enumerate(meshes):
        for right in meshes[i + 1:]:
            x = np.minimum(left.bounds[1], right.bounds[1]) - np.maximum(
                left.bounds[0], right.bounds[0])
            if np.all(x > 1e-6):
                potential_overlap += 1
    if potential_overlap:
        warnings.append(
            f'potential_aabb_overlap_pairs: {potential_overlap}; '
            'not a boolean intersection or physical mating check')
    if desired_clearance_mm is not None:
        warnings.append(
            f'desired_assembly_clearance_mm={desired_clearance_mm:.3f} is '
            'documented only; CAD geometry has NOT been offset or verified')
    result = {
        'minimum_component_bbox_extent_mm': round(minimum, 4),
        'downward_facing_triangle_ratio': round(ratio, 5),
        'potential_bbox_overlap_pairs': potential_overlap,
        'desired_clearance_mm': desired_clearance_mm,
        'wall_thickness': 'not_checked',
        'feature_fidelity': 'not_checked',
        'supports': 'not_checked',
        'part_connectivity': 'not_checked',
        'hole_fit_and_clearance': 'not_checked',
        'material_strength': 'not_checked',
        'slicer_review': 'not_checked',
        'physical_print': 'not_checked',
    }
    return result, warnings


def export_print(input_path: Path, output_dir: Path, slug: str,
                 *, longest_mm: float | None = None,
                 bed_mm: list[float] | None = None,
                 mode: str = 'parts', repair_normals: bool = False,
                 max_triangles: int = 1_000_000,
                 profile_id: str = 'fdm-220',
                 material: str | None = None,
                 desired_clearance_mm: float | None = None,
                 audit_only: bool = False) -> dict:
    if mode not in {'parts', 'fused', 'separated'}:
        raise ValueError('mode must be parts, separated or fused')
    if not re.fullmatch(r'[a-z0-9][a-z0-9-]{0,119}', slug):
        raise ValueError('Unsafe output slug')
    if max_triangles < 1:
        raise ValueError('Maximum triangles must be positive')
    profile = read_profile(profile_id)
    if material is not None and material not in profile['materials']:
        raise ValueError(f'Material not supported by selected preset: {material}')
    if desired_clearance_mm is not None and (
        not math.isfinite(desired_clearance_mm) or
        desired_clearance_mm < 0 or desired_clearance_mm > 10
    ):
        raise ValueError('Design clearance must be 0–10 mm')
    effective_bed = bed_mm if bed_mm is not None else profile['build_volume_mm']
    if len(effective_bed) != 3 or any(not math.isfinite(v) or v <= 0 for v in effective_bed):
        raise ValueError('Build envelope must contain three positive finite dimensions')
    # Content provenance stays stable even if names/IDs later change.
    with input_path.open('rb') as source:
        source_sha256 = hashlib.file_digest(source, 'sha256').hexdigest()
    meshes, dims = normalize(load_meshes(input_path), longest_mm, repair_normals)
    if mode == 'fused' and len(meshes) > 1:
        try:
            merged = trimesh.boolean.union(meshes, engine='manifold')
        except (ImportError, ValueError, RuntimeError) as exc:
            raise ValueError('Boolean failed; install manifold3d and check each mesh') from exc
        if merged is None or not isinstance(merged, trimesh.Trimesh):
            raise ValueError('Boolean union produced no mesh')
        meshes = [merged]
    parts, errors, warnings = audit(meshes, max_triangles, effective_bed)
    indicators, extra_warnings = geometry_guidance(
        meshes, profile, desired_clearance_mm)
    warnings.extend(extra_warnings)
    warnings.append('Print process and material presets do NOT alter mesh geometry.')
    report = {
        'status': 'blocked' if errors else 'geometry_pass_manual_review_required',
        'source': str(input_path),
        'source_sha256': source_sha256,
        'asset': slug, 'mode': mode, **dims,
        'parts': parts, 'errors': errors, 'warnings': warnings,
        'files': {}, 'manufacturing_certified': False,
        'unit': 'millimeter', 'up_axis': 'Z',
        'printer_profile': profile_id,
        'process': profile['process'], 'material': material,
        'build_volume_mm': effective_bed,
        'audit_only': bool(audit_only),
        'indicators_not_manufacturing_checks': indicators,
    }
    if audit_only:
        return report
    output_dir.mkdir(parents=True, exist_ok=True)
    stl = output_dir / f'{slug}.stl'
    threemf = output_dir / f'{slug}.3mf'
    if errors:
        # Prevent stale output from an earlier accepted run being reused as current.
        for artifact in (stl, threemf):
            artifact.unlink(missing_ok=True)
        for artifact in output_dir.glob(f'{slug}-part-*.stl'):
            artifact.unlink()
    else:
        combined = trimesh.util.concatenate(meshes)
        stl.write_bytes(combined.export(file_type='stl'))
        export_3mf(threemf, meshes, slug)
        report['files']['stl'] = {
            'path': str(stl), 'bytes': stl.stat().st_size,
            'sha256': hashlib.sha256(stl.read_bytes()).hexdigest()}
        report['files']['3mf'] = {
            'path': str(threemf), 'bytes': threemf.stat().st_size,
            'sha256': hashlib.sha256(threemf.read_bytes()).hexdigest()}
        if mode == 'separated':
            # Independent parts are translated to their local build-plate origin;
            # the 3MF continues to preserve the original assembled placements.
            for index, source in enumerate(meshes, start=1):
                part = source.copy()
                part.apply_translation(-part.bounds[0])
                dest = output_dir / f'{slug}-part-{index:03d}.stl'
                dest.write_bytes(part.export(file_type='stl'))
                report['files'][f'part_{index:03d}'] = {
                    'path': str(dest), 'bytes': dest.stat().st_size,
                    'sha256': hashlib.sha256(dest.read_bytes()).hexdigest()}
    (output_dir / f'{slug}.print-report.json').write_text(
        json.dumps(report, indent=2, ensure_ascii=False) + '\n',
        encoding='utf-8')
    return report

def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    selectors = parser.add_mutually_exclusive_group(required=True)
    selectors.add_argument('--asset-id', help='Catalog asset ID (.cache/raw for procedural assets)')
    selectors.add_argument('--input', type=Path, help='Original full-resolution GLB')
    parser.add_argument('--output-dir', type=Path, default=ROOT / '.cache/print')
    parser.add_argument('--slug', help='Output slug, required for --input')
    parser.add_argument('--longest-mm', type=float, help='Scale longest side to this length in mm')
    parser.add_argument('--bed-mm', type=float, nargs=3, metavar=('X', 'Y', 'Z'))
    parser.add_argument('--mode', choices=['parts', 'separated', 'fused'], default='parts')
    parser.add_argument('--profile', default='fdm-220',
                        help='Preset from catalog/print_policy.json')
    parser.add_argument('--material', help='Material label for manual review (no mesh changes)')
    parser.add_argument('--clearance-mm', type=float,
                        help='Desired CAD assembly clearance (recorded, NOT applied)')
    parser.add_argument('--audit-only', action='store_true',
                        help='Inspect mesh and print JSON without writing STL/3MF')
    parser.add_argument('--repair-normals', action='store_true')
    parser.add_argument('--max-triangles', type=int, default=1_000_000)
    args = parser.parse_args(argv)
    try:
        if args.max_triangles < 1 or (
            args.bed_mm and any(not math.isfinite(v) or v <= 0 for v in args.bed_mm)
        ):
            raise ValueError('Invalid triangle budget or build volume')
        if args.asset_id:
            source, slug, asset = read_asset(args.asset_id)
            if args.slug and args.slug != slug:
                raise ValueError('Catalog --slug must match the immutable slug')
        else:
            source, slug, asset = args.input, args.slug, None
            if not slug:
                raise ValueError('--slug is required with --input')
        report = export_print(
            source, args.output_dir, slug,
            longest_mm=args.longest_mm, bed_mm=args.bed_mm,
            mode=args.mode, repair_normals=args.repair_normals,
            max_triangles=args.max_triangles,
            profile_id=args.profile, material=args.material,
            desired_clearance_mm=args.clearance_mm,
            audit_only=args.audit_only,
        )
        if asset:
            report['asset_id'] = asset['id']
        print(json.dumps(report, ensure_ascii=False, indent=2))
        return 0 if not report['errors'] else 2
    except (ValueError, FileNotFoundError, OSError) as exc:
        print(json.dumps({'status': 'error', 'reason': str(exc)}, ensure_ascii=False),
              file=sys.stderr)
        return 2


if __name__ == '__main__':
    raise SystemExit(main())
