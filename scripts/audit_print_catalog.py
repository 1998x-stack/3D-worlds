#!/usr/bin/env python3
"""Catalog-wide, fail-honest print-readiness inventory; no printer commands."""
from __future__ import annotations

import argparse
from collections import Counter
import hashlib
import json
from pathlib import Path

from export_print import ROOT, export_print, read_asset, read_profile


def inventory(*, category: str | None = None,
              asset_id: str | None = None, limit: int | None = None,
              metadata_only: bool = False,
              longest_mm: float = 120,
              profile_id: str = 'fdm-220') -> dict:
    policy = json.loads((ROOT / 'catalog/print_policy.json').read_text(encoding='utf-8'))
    manifest_raw = (ROOT / 'catalog/models.json').read_bytes()
    manifest = json.loads(manifest_raw)
    printer = read_profile(profile_id)
    rows = []
    assets = manifest['assets']
    if asset_id:
        assets = [a for a in assets if a['id'] == asset_id]
        if not assets:
            raise ValueError('Unknown asset ID: ' + asset_id)
    if category:
        if category not in policy['categories']:
            raise ValueError('Unknown category: ' + category)
        assets = [a for a in assets if a['category'] == category]
    if limit is not None:
        if limit < 1:
            raise ValueError('--limit must be positive')
        assets = assets[:limit]
    for asset in assets:
        cat = policy['categories'].get(asset['category'])
        if not cat:
            raise ValueError('Category policy is missing for ' + asset['category'])
        row = {
            'asset_id': asset['id'], 'slug': asset['slug'],
            'category': asset['category'], 'priority': cat['priority'],
            'goal_zh': cat['goal_zh'], 'checklist_zh': cat['focus_zh'],
            'manufacturing_certified': False,
        }
        source, _, _ = read_asset(asset['id'])
        if metadata_only:
            row.update(status='not_audited',
                       note='Catalog/priority policy only; no mesh was opened')
        elif not source.is_file():
            row.update(status='missing_source',
                       note='Generate original GLB before geometry auditing')
        else:
            try:
                report = export_print(
                    source, ROOT / '.cache/print', asset['slug'],
                    longest_mm=longest_mm, profile_id=profile_id,
                    audit_only=True)
                row.update(status=report['status'], errors=report['errors'],
                           warnings=report['warnings'], source_sha256=report['source_sha256'],
                           geometry_indicators=report['indicators_not_manufacturing_checks'])
            except (OSError, ValueError, RuntimeError) as exc:
                row.update(status='audit_error', error=str(exc))
        rows.append(row)
    return {
        'schema_version': '1.0.0',
        'manifest_sha256': hashlib.sha256(manifest_raw).hexdigest(),
        'catalog_total': len(manifest['assets']),
        'selected_count': len(rows),
        'audit_scope': 'metadata_only' if metadata_only else 'local_source_glb_only',
        'profile': profile_id,
        'build_volume_mm': printer['build_volume_mm'],
        'reviewed_in_slicer': False, 'physical_print_verified': False,
        'priority_counts': dict(sorted(Counter(x['priority'] for x in rows).items())),
        'status_counts': dict(sorted(Counter(x['status'] for x in rows).items())),
        'results': rows,
    }


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--metadata-only', action='store_true',
                        help='Validate catalog and policy; do not inspect meshes')
    parser.add_argument('--category')
    parser.add_argument('--asset-id')
    parser.add_argument('--limit', type=int)
    parser.add_argument('--longest-mm', type=float, default=120)
    parser.add_argument('--profile', default='fdm-220')
    parser.add_argument('--output', type=Path, default=ROOT / '.cache/print/catalog-audit.json')
    parser.add_argument('--strict', action='store_true',
                        help='Non-zero exit if an inspected model is missing, blocked, or errored')
    args = parser.parse_args(argv)
    try:
        if not 5 <= args.longest_mm <= 1000:
            raise ValueError('--longest-mm must be between 5 and 1000')
        result = inventory(
            category=args.category, asset_id=args.asset_id, limit=args.limit,
            metadata_only=args.metadata_only, longest_mm=args.longest_mm,
            profile_id=args.profile)
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n',
                               encoding='utf-8')
        print(json.dumps({
            'output': str(args.output), 'selected_count': result['selected_count'],
            'audit_scope': result['audit_scope'], 'priority_counts': result['priority_counts'],
            'status_counts': result['status_counts']}, ensure_ascii=False, indent=2))
        if args.strict and any(k in result['status_counts'] for k in
                               ('blocked', 'missing_source', 'audit_error')):
            return 2
        return 0
    except (OSError, ValueError) as exc:
        parser.error(str(exc))


if __name__ == '__main__':
    raise SystemExit(main())
