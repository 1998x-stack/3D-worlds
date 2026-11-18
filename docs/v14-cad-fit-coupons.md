# V1.4.3 · CAD fit sections and offline slicing for two pilots

**Scope:** two separately engineered OpenSCAD print prototypes, NOT 30
manufacturing-qualified assets. The 30 original V1.4 scene GLBs remain
blocked by the manufacturing risk audit. A green CI is not a safety approval.

## Reproducible engineering files

- [Soap cradle CAD](../printables/v14/clip_on_soap_drainage_bridge.scad)
- [Hex driver-bit dock CAD](../printables/v14/hex_driver_bit_index_dock.scad)
- [STL cross-section and offline G-code audit](../scripts/audit_v14_cad_fit.py)
- [Standalone geometry tests](../tests/test_v14_cad_fit.py)
- [Actual physical coupon test worksheet](templates/v14-coupon-physical-fit-log.md)
- [Prior 30-asset manufacturing backlog](v14-print-manufacturing.md)

## Measured from actual OpenSCAD-generated STL geometry

| Prototype | STL bounds (mm) | Independent section-plane measurements |
|---|---|---|
| Soap bridge body | 128 × 99.8 × 28 | Nine true 4.8-mm drain openings; eight 6.2-mm webs; **two 14.4-mm lateral-entry clip gaps**, 4.0-mm upper and lower jaws |
| Soap coupon | 82 × 25.8 × 28 | Three connected fit coupons: **14.2, 14.4, 14.6 mm** total gap; nominal lip thickness 14 mm is an unmeasured design assumption |
| Hex dock body | 108 × 108 × 18 | Four inspected holes in one 4×4 row, **6.85-mm measured hex opening AF**; **6.0-mm blind pocket floor** |
| Hex coupon | 74 × 26 × 10 | Three openings **6.65, 6.85, 7.15 mm AF** against nominal 6.35-mm bits; single-side gaps 0.15, 0.25, 0.40 mm; 6-mm floor |

**Measurement method:** independent triangle-plane STL cuts, not numbers
copied from the CAD text. Soap drainage is sectioned at Z=2,Y=0.
The actual open-end clip has cuts at Y=50 and X=±42.
Hex apertures are sectioned at Z=12,Y=-30 and the floor at Y=-30,X=-30.
The script checks exact sections to ±0.065 mm. This does **NOT**
measure global minimum walls, real part fit or printable extrusion accuracy.

## Fixed a real geometry error in the soap holder

The V1.4.2 clip hole was in the wrong axis (it opened in +Z instead of
sideways around the rim thickness). The V1.4.3 C-shaped **rigid cradle**
now opens in +Y, with lower jaw from Z=0–4 mm and upper jaw
from Z=18.4–22.4 mm. The gap is **14.4 mm** for an assumed 14-mm sink rim.
It is NOT an elastic snap clip and no retention force, material fatigue
or wet-use performance has been verified. Its upper jaw is an overhang:
the printer-specific slicer must determine support necessity and removal.

The hex-dock now has a parametrized 0.8-mm socket entry chamfer,
6-mm nominal blind floor, nominal bit width 6.35 mm, and printable
fit-test samples. The sampled socket faces are geometrically distinct,
but the actual bit brand, wear and press-fit remain unknown.

## Offline slicer is NOT the printer

Local prerequisites: OpenSCAD, Python dependencies from
`requirements-print.txt` and optionally Ubuntu's `slic3r` CLI.

```bash
# Cross-section, topology, volume, axis and envelopes — no slicer:
python3 scripts/audit_v14_cad_fit.py \
  --output .cache/print/v14-cad-fit-sections.json

# Explicit offline G-code toolpaths for 2 full bodies + 2 fit coupons:
python3 scripts/audit_v14_cad_fit.py --with-slicer \
  --output .cache/print/v14-cad-fit-sections.json
```

The CLI uses demonstrative (not printer-qualified) parameters:
**0.4-mm nozzle, 0.2-mm layers, 1.75-mm filament, three perimeters, 20% fill**.
It checks that Slic3r produced real extrusions and multiple Z layers and
records G-code hashes/size. Generated artifacts are for **human toolpath
review only; never directly send to a printer**. See the
[official Slic3r CLI usage](https://manual.slic3r.org/advanced/command-line).
Neither producing G-code nor sampling selected STL sections qualifies as
human layer inspection. All automated checks keep physical print and
manufacturing certification fields at false/zero.

### Physical fit sequence for the next operator

1. Measure the **actual** sink/rim thickness and available opening reach
   and **actual** hex tool across-flats with calipers. Change CAD defaults.
2. Inspect nozzle, material, supports, bridges, thin webs, adhesion and
   layer-by-layer toolpaths in a properly calibrated slicer machine profile.
3. Print **coupons first** (0.2/0.4/0.6-mm total soap gap, or
   0.15/0.25/0.40-mm per-side hex clearance), measure postprint dimensions,
   trial insertion/removal and record actual results.
4. Decide whether to redesign; only then attempt full CAD body printing
   and test creep, retention, repeated use, wet-cleaning or other safety.
5. Record dates, printer/slicer/material and measurable evidence in
   [the empty physical coupon log](templates/v14-coupon-physical-fit-log.md).

**Automated stage after V1.4.3:** STL topology and chosen cross-section
geometry pass for 4 candidate solids; offline toolpath availability is
checked by CI. **Human slice review, full-wall survey, physical prints,
load/fit tests and commercial approval remain NOT PERFORMED.**
