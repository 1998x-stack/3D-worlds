# 3D Worlds · Pull request review & merge checklist

**PR URL:** 
**Target branch and SHA:** 
**PR head SHA:** 
**Merge-base SHA:** 
**Current CI run URL:** 

## Integration
- [ ] Inspected PR diff, changed filenames, reviews, review threads and raw failed job logs
- [ ] Compared current main vs merge-base, explicitly resolved overlapping paths
- [ ] Integrated without force-pushing over a concurrent update
- [ ] Confirmed stable asset IDs, dimensions, source paths and `prototype_unverified` status

## Independent verification
- [ ] Metadata/Python tests: command, timestamp, exit status and report
- [ ] Batch 01–03 OpenSCAD geometry and evidence artifacts: 50/50 recorded, exact current head
- [ ] Second-pass Three.js tests run in default npm test script
- [ ] V1.4 GLB manufacturing scan and CAD pilot/cross-section/offline slicer gates retained
- [ ] Fresh GLB/LOD/index hashes, browser gallery and MCP smoke run on current head
- [ ] `deploy` requires both CI jobs and only runs on main
- [ ] CAD report artifact `path` is populated and upload status checked

## Evidence and limitations
**Implemented:** 
**Automated passed:** 
**Automated failed or interrupted:** 
**Not run:** 
**Physical manufacturing tests still required:** 
**Latest head status / merge decision:** 

A green geometry report does not authorize claims of sale readiness, material safety, physical fit or certified printer G-code.
