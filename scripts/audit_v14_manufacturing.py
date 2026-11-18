#!/usr/bin/env python3
"""Traceable V1.4 mesh-manufacturing risk survey (never physical certification).

Input: ORIGINAL full-resolution .cache/raw/*.glb, not rendered LOD variants.
All lengths are converted from source meters/Y-up to millimeters/Z-up.
Indicators are conservative bounds and surface proxies, NOT true walls,
clearances, load ratings, support planning, slicer slices, or printed tests.
"""
from __future__ import annotations

import argparse
from collections import Counter
import hashlib
import json
import math
from pathlib import Path
import sys

import numpy as np

from export_print import ROOT, audit, geometry_guidance, load_meshes, normalize, read_profile

COLLECTION = ROOT / "catalog/collections/v14.json"
INTENTS = ROOT / "catalog/v14_manufacturing_intent.json"
OUTPUT = ROOT / ".cache/print/v14-manufacturing-risk.json"


def read_scope() -> tuple[dict, dict]:
    collection = json.loads(COLLECTION.read_text(encoding="utf-8"))
    intents = json.loads(INTENTS.read_text(encoding="utf-8"))
    entries = collection["assets"]
    notes = intents["models"]
    if (len(entries) != 30 or len(notes) != 30
            or len({e["id"] for e in entries}) != 30):
        raise ValueError("V1.4 manufacturing scope must contain exactly 30 unique assets")
    if {e["id"] for e in entries} != {x["asset_id"] for x in notes}:
        raise ValueError("Every V1.4 model needs a distinct manufacturing intent")
    for entry in notes:
        if entry["review_stage"] != "unreviewed":
            raise ValueError("Never assume manufacturing sign-off from an intent manifest")
        if entry["candidate_cad"] is not None:
            candidate = (ROOT / entry["candidate_cad"]).resolve()
            if not candidate.is_relative_to(ROOT.resolve()) or not candidate.is_file():
                raise ValueError("Missing or unsafe CAD pilot: " + entry["asset_id"])
    return collection, {item["asset_id"]: item for item in notes}


def inspect_meshes(meshes, *, profile: dict, asset_id: str,
                   reference_feature_mm: float = 0.9,
                   max_triangles: int = 1_000_000) -> dict:
    """Analyze already-normalized millimeter / Z-up meshes.

    bbox minima are only a thin-feature *screen*. A solid's bounding extent
    is not its material wall thickness; recording an apparently large extent
    must not certify a shell or bridge.
    """
    if not meshes:
        raise ValueError("No meshes provided")
    if not math.isfinite(reference_feature_mm) or reference_feature_mm <= 0:
        raise ValueError("Invalid feature guideline")
    parts, errors, warnings = audit(meshes, max_triangles,
                                    profile["build_volume_mm"])
    heuristics, extra_warnings = geometry_guidance(meshes, profile, None)
    if len(parts) != len(meshes):
        raise AssertionError("Part audit lost meshes")
    tiny = [part["index"] for part in parts
            if min(part["bounds_mm"]) < reference_feature_mm - 1e-7]
    # Bed proxy: downward horizontal triangle areas close to the lowest Z.
    # This is not a build-plate adhesion or support analysis.
    bottom = min(float(mesh.bounds[0][2]) for mesh in meshes)
    contact_area = 0.0
    for mesh in meshes:
        centers = mesh.triangles_center
        normals = mesh.face_normals
        close = ((centers[:, 2] - bottom) <= 0.15) & (normals[:, 2] < -0.85)
        contact_area += float(np.sum(mesh.area_faces[close]))
    contact_area = round(contact_area, 3)
    risk_tags = []
    if errors:
        risk_tags.append("mesh_topology_or_envelope_blocker")
    if tiny:
        risk_tags.append("component_bbox_below_reference_feature")
    if heuristics["downward_facing_triangle_ratio"] > 0.02:
        risk_tags.append("downward_facing_surfaces_review")
    if len(meshes) > 1:
        risk_tags.append("multiple_source_meshes_joining_unverified")
    if contact_area < 1:
        risk_tags.append("minimal_planar_bed_contact_proxy")
    if heuristics["potential_bbox_overlap_pairs"]:
        risk_tags.append("aabb_overlap_not_boolean_verified")
    return {
        "asset_id": asset_id,
        "status": "mesh_blocked" if errors else "topology_pass_manual_review_required",
        "manufacturing_certified": False,
        "mesh_count": len(parts),
        "triangle_count": sum(p["triangles"] for p in parts),
        "watertight_mesh_count": sum(p["watertight"] for p in parts),
        "winding_consistent_mesh_count": sum(p["winding_consistent"] for p in parts),
        "nonpositive_volume_mesh_count": sum(p["signed_volume_mm3"] <= 1e-9 for p in parts),
        "invalid_face_count": sum(p["degenerate_faces"] for p in parts),
        "minimum_component_bbox_extent_mm": heuristics["minimum_component_bbox_extent_mm"],
        "component_bbox_below_reference_count": len(tiny),
        "component_bbox_below_reference_indices_sample": tiny[:12],
        "reference_feature_mm": reference_feature_mm,
        "planar_bed_contact_area_proxy_mm2": contact_area,
        "downward_facing_triangle_ratio": heuristics["downward_facing_triangle_ratio"],
        "aabb_overlap_pairs_proxy": heuristics["potential_bbox_overlap_pairs"],
        "risk_tags": risk_tags,
        "error_count": len(errors),
        "errors_sample": errors[:18],
        "warnings_sample": (warnings + extra_warnings)[:8],
        "evidence_boundary": {
            "topology": "measured_on_source_mesh",
            "part_bbox": "measured_not_a_wall_gauge",
            "bed_contact": "coarse_triangle_area_proxy_only",
            "aabb_overlap": "candidate_pairs_only_not_interference_test",
            "wall_thickness": "not_measured",
            "slicer_toolpaths": "not_generated",
            "support_geometry": "not_generated",
            "assembly_fit": "not_measured",
            "mechanical_strength": "not_tested",
            "physical_print": "not_tested",
            "commercial_releasability": "not_evaluated",
        },
    }


def create_report(*, longest_mm: float = 120.0, profile_id: str = "fdm-220",
                  require_all_sources: bool = False,
                  only_asset_id: str | None = None) -> dict:
    if not math.isfinite(longest_mm) or not 5 <= longest_mm <= 1000:
        raise ValueError("longest-mm must be finite and between 5 and 1000")
    collection, intents = read_scope()
    profile = read_profile(profile_id)
    if profile["process"] != "FDM" or profile.get("nozzle_mm") is None:
        raise ValueError("This feature proxy is calibrated for FDM presets only")
    target = only_asset_id
    assets = [a for a in collection["assets"] if target is None or a["id"] == target]
    if not assets:
        raise ValueError("Unknown V1.4 model: " + str(target))
    result = []
    for entry in assets:
        source = ROOT / ".cache/raw" / (entry["slug"] + ".glb")
        intent = intents[entry["id"]]
        row = {
            "asset_id": entry["id"],
            "slug": entry["slug"],
            "category": entry["category"],
            "visual_geometry_revision": entry["geometry_revision"],
            "cad_pilot": intent["candidate_cad"],
            "intended_use": intent["intended_use"],
            "critical_fit_test": intent["critical_fit_test"],
            "validation_actions": intent["validation_actions"],
            "review_stage": "unreviewed",
            "physical_print_tested": False,
            "slicer_reviewed": False,
            "manufacturing_certified": False,
        }
        if not source.is_file():
            row.update(status="source_missing",
                       risk_tags=["source_missing"],
                       note="Run npm run generate:assets to create original GLB")
        else:
            try:
                with source.open("rb") as handle:
                    source_sha = hashlib.file_digest(handle, "sha256").hexdigest()
                normalized, dimensions = normalize(load_meshes(source), longest_mm, False)
                measured = inspect_meshes(
                    normalized, profile=profile, asset_id=entry["id"],
                    reference_feature_mm=round(profile["nozzle_mm"] * 2.25, 3))
                row.update(measured)
                row.update(source_sha256=source_sha,
                           source_dimensions_mm=dimensions["source_dimensions_mm"],
                           measured_dimensions_mm=dimensions["dimensions_mm"],
                           scale_relative_to_source=dimensions["scale_relative_to_source"])
            except (OSError, ValueError, RuntimeError, ArithmeticError) as exc:
                row.update(status="audit_error", risk_tags=["audit_error"],
                           error_type=type(exc).__name__, error=str(exc)[:450])
        result.append(row)
    counts = Counter(r["status"] for r in result)
    # Strictness only enforces successful machine inspection. A mesh being
    # blocked is a useful, honest result, not a reason to hide it from CI.
    failed_sources = sum(r["status"] in {"source_missing", "audit_error"} for r in result)
    return {
        "schema_version": "1.0.0",
        "collection": "v1.4",
        "visual_revision": "1.4.1",
        "source_collection_sha256": hashlib.sha256(COLLECTION.read_bytes()).hexdigest(),
        "intent_sha256": hashlib.sha256(INTENTS.read_bytes()).hexdigest(),
        "profile": profile_id,
        "process": profile["process"],
        "nozzle_mm": profile["nozzle_mm"],
        "target_longest_side_mm": longest_mm,
        "reference_2_perimeter_feature_mm": round(profile["nozzle_mm"] * 2.25, 3),
        "reference_note": "screening threshold only; not measured wall thickness or accepted print settings",
        "model_count": len(result),
        "original_glb_inspection_complete": failed_sources == 0 and len(result) == 30,
        "status_counts": dict(sorted(counts.items())),
        "geometry_blocked_count": counts["mesh_blocked"],
        "machine_scan_unavailable_count": failed_sources,
        "physically_tested_count": 0,
        "slicer_reviewed_count": 0,
        "certified_count": 0,
        "manufacturing_certified": False,
        "require_all_sources": require_all_sources,
        "assets": result,
    }


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--longest-mm", type=float, default=120.0)
    parser.add_argument("--profile", default="fdm-220")
    parser.add_argument("--asset-id")
    parser.add_argument("--require-all-sources", action="store_true")
    parser.add_argument("--output", type=Path, default=OUTPUT)
    args = parser.parse_args(argv)
    try:
        report = create_report(longest_mm=args.longest_mm, profile_id=args.profile,
                               require_all_sources=args.require_all_sources,
                               only_asset_id=args.asset_id)
    except (ValueError, OSError) as exc:
        parser.error(str(exc))
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n",
                           encoding="utf-8")
    print(json.dumps({
        "report": str(args.output), "count": report["model_count"],
        "status_counts": report["status_counts"],
        "physically_tested": report["physically_tested_count"],
        "slicer_reviewed": report["slicer_reviewed_count"],
    }, ensure_ascii=False))
    if args.require_all_sources and report["machine_scan_unavailable_count"]:
        return 2
    return 0


if __name__ == "__main__":
    sys.exit(main())
