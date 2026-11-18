# Market → original procedural asset: reproducible selection and QA protocol

This is the shared v2.1 research-to-asset reference for Amazon, eBay, Hacker News and other externally observed ideas. Do not copy product STL/GLB, listing renders, branding, measured vendor geometry or copyrighted/trade-dress-specific styling.

## Research evidence ledger (write one row per selected hypothesis)

| Field | Required observation | Never substitute |
| --- | --- | --- |
| channel/date | URL, marketplace/forum name, retrieval date | invented "top-selling" ranking |
| observed demand | explicit available offer, repeated user pain, maker discussion | reviews / watchers misrepresented as sales |
| white-space hypothesis | use problem, intended audience, independent twist | third-party protected geometry |
| geometry brief | category, scale (metres Y-up), silhouette, key parts, movable-looking connectors | a recolored primitive |
| commercial risk | IP, strength, fit, water/heat/food-contact/electric use, regional rules | unsubstantiated certification |
| release evidence | CI build + GLB + visual view + independent geometry audit where applicable | passing source parser alone |

No fabricated product sales, buyer demographics, Amazon/eBay rank, conversion, profitability or authorization. Refer to external references for **conceptual market problems only**. A specific seller photograph is not a geometry license. For inspiration with derivative-risk, choose a functionally distinct original silhouette and avoid trademarked identifiers.

## Batch design gate

1. Read the existing manifest first. Compute real inventory and duplicates by ID, slug and semantics; retain every historical release row. Choose a new additive collection and use the real count, not obsolete fixed documentation.
2. Make 30 distinct briefs across compatible repository categories. Each requires an independent named source file and `createX()`, meaningful part labels, native Three.js group, three-dimensional envelope and source/metadata agreement.
3. Require *semantic fit* — model names must match geometry: three-wheeled vehicles use three wheels, a translucent observation terrarium includes windows, a ventilated stand has explicit air gap detail, a movable facade has identifiable pivots. Use explicit inspection checklists for unusual models.
4. Require transparent visual QA: all sides, 3/4 hero, floor contact, z-fighting, missing faces, detached parts, source-export dependencies, LOD silhouette retention. Count parts and triangles from **real source/rendered output**, not a quota or synthetic estimate.
5. Block marketing claims beyond evidence. Visual scenes are metres / Y-up and don't establish watertightness, mm/Z-up print dimensions, strength, tolerances, heat/food/electrical safety or suitability for real goods.

## Release checks and evidence states

```bash
python3 scripts/verify_skill_mirrors.py
python3 scripts/catalog.py validate
python3 scripts/catalog.py build
python3 -m unittest discover -s tests -v
node scripts/validate_models.mjs
npm run build
npm run generate:assets
npm run verify:assets
npm run test:gallery
```

An asset is **source authored** once its source and catalog record exist. It is **CI validated** only after every required check actually passes for that exact commit. A model is **manufacturing candidate** only with separate original CAD and appropriate mesh/geometry/slicer review, and **physically validated** only after documented test coupons, fit/load evidence and human approval. A published Pages build isn't a sales test.

## Example decision record — v1.5

- Value proposition: indexed repair parts tray combines numbered compartments and a tool groove for technicians; inspiration channel: eBay offers + maker workflow, *not copied product geometry*.
- Visual primitives: tray deck, dividers, indexed markers and wells; each with meaningful unique names, deliberate form and separation.
- Measurement evidence: report actual part count from recipe and observed GLB triangles/hashes only after CI, note pending mechanical and fit tasks.
- Record title, source slug, category, dimensions, risk, source URL/date and exact test statuses in the Collection document, then raise a reviewable PR.

Do not disable historical ID-preservation tests to make a batch pass. Update fixed current-total tests while preserving exact historical release-membership invariants.
