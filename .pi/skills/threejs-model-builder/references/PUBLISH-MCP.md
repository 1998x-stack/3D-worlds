# Publishing, search API, object storage and MCP

## Components and trust boundaries

`catalog/models.json` is the authoring master → `scripts/catalog.py build` makes read-only SQLite projection → `services/mcp_server.py` gives local MCP search and source extraction. Separately `scripts/export_static_catalog.py` creates bounded static browser metadata, `npm run build` publishes Vite site. The optional `services/search_api.py` serves paginated HTTP search (not part of GitHub Pages). Binary assets can reside in local immutable store or S3/MinIO. All publishing claims require actual deployment evidence.

## Local app / Pages

```bash
npm install
npm run dev
python3 scripts/catalog.py build
npm run build
npm run test:gallery
```

`vite.config.js` uses project base `/3D-worlds/` for GitHub Pages; CI at `.github/workflows/pages.yml` validates, generates thumbnails/LODs, archives artifacts, then deploys dist on main. A PR run verifies but must not publish. Check workflow and Pages settings for a live URL before reporting a release.

## Local MCP

```bash
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements-mcp.txt
python3 scripts/catalog.py build
python services/mcp_server.py
```

Available tool names are documented in `README.md` / `docs/mcp-contract.md` and include `search_models`, `get_model`, `list_categories`, `get_threejs_source`, `get_import_recipe` and `get_asset_download` when a binary exists. MCP sends source/meta back; it does **not** silently edit client projects, and it is not hosted by Pages.

## P2 API and object-store publishing

```bash
python3 scripts/catalog.py build
python3 services/search_api.py
curl http://127.0.0.1:8071/healthz
curl 'http://127.0.0.1:8071/api/v1/assets?limit=10'
python3 scripts/publish_objects.py              # dry run
THREED_WORLDS_STORE=local python3 scripts/publish_objects.py --apply
```

The API uses cursor pagination and 1–100 page sizes, with SQLite/FTS5 and bounded static projection. Chinese search can use LIKE fallback; do not promise language-aware segmentation. Never ship a 50K-asset JSON dump in initial browser bundle. By default API is loopback-only. Production requires TLS, hardened service, observability, rate limiting and managed storage.

For S3/MinIO, configure `THREED_WORLDS_STORE=s3`, bucket/endpoint and AWS credentials outside Git. Private buckets and expiring signed GET URLs are the intended behavior. Test the actual endpoint and CORS/availability before claiming that public downloads work. Avoid logging secrets. See `docs/p0-p1-p2-delivery.md`.

## Deployment evidence record

Record GitHub commit/PR, CI run URL, static gallery route, health endpoint result, generated artifact count, optional object-store manifest, signed URL response and MCP local smoke. Report any missing external credentials, public hosting or 50K load tests as unverified.

