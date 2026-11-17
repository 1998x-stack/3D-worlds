-- 3D Worlds catalog schema v1.0.0
-- Local SQLite catalog; GitHub Pages consumes a separate static JSON projection.
PRAGMA foreign_keys = ON;
CREATE TABLE IF NOT EXISTS schema_metadata (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);
INSERT OR REPLACE INTO schema_metadata(key,value) VALUES ('schema_version','1.0.0');

CREATE TABLE IF NOT EXISTS categories (
  category_id TEXT PRIMARY KEY,
  label TEXT NOT NULL,
  parent_id TEXT REFERENCES categories(category_id) ON DELETE SET NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS assets (
  asset_id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  title_zh TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  search_terms TEXT NOT NULL DEFAULT '',
  category_id TEXT NOT NULL REFERENCES categories(category_id),
  kind TEXT NOT NULL CHECK(kind IN ('procedural','glb','gltf')),
  status TEXT NOT NULL DEFAULT 'published' CHECK(status IN ('draft','review','published','deprecated')),
  license_spdx TEXT NOT NULL,
  creator TEXT NOT NULL,
  source_url TEXT,
  source_path TEXT,
  generator TEXT,
  binary_path TEXT,
  preview_path TEXT,
  unit TEXT NOT NULL DEFAULT 'm' CHECK(unit IN ('m','cm','mm')),
  up_axis TEXT NOT NULL DEFAULT 'Y' CHECK(up_axis IN ('Y','Z')),
  width REAL NOT NULL CHECK(width > 0),
  height REAL NOT NULL CHECK(height > 0),
  depth REAL NOT NULL CHECK(depth > 0),
  triangle_count INTEGER CHECK(triangle_count >= 0),
  vertex_count INTEGER CHECK(vertex_count >= 0),
  file_size_bytes INTEGER CHECK(file_size_bytes >= 0),
  content_sha256 TEXT,
  version TEXT NOT NULL DEFAULT '1.0.0',
  style TEXT NOT NULL DEFAULT '',
  accent TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CHECK(source_path IS NOT NULL OR binary_path IS NOT NULL)
);
CREATE INDEX IF NOT EXISTS idx_assets_category_status ON assets(category_id,status,slug);
CREATE INDEX IF NOT EXISTS idx_assets_kind_status ON assets(kind,status);
CREATE INDEX IF NOT EXISTS idx_assets_license ON assets(license_spdx);

CREATE TABLE IF NOT EXISTS tags (
  tag_id TEXT PRIMARY KEY,
  label TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS asset_tags (
  asset_id TEXT NOT NULL REFERENCES assets(asset_id) ON DELETE CASCADE,
  tag_id TEXT NOT NULL REFERENCES tags(tag_id) ON DELETE CASCADE,
  PRIMARY KEY(asset_id,tag_id)
);
CREATE INDEX IF NOT EXISTS idx_asset_tags_tag ON asset_tags(tag_id,asset_id);

-- A single asset can eventually have source, GLB, thumbnail, LOD, animation,
-- collision proxy, or engine-specific variants without adding columns.
CREATE TABLE IF NOT EXISTS asset_files (
  asset_id TEXT NOT NULL REFERENCES assets(asset_id) ON DELETE CASCADE,
  variant_key TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('source','model','thumbnail','texture','animation','collision','other')),
  format TEXT NOT NULL,
  repository_path TEXT,
  public_url TEXT,
  mime_type TEXT,
  sha256 TEXT,
  bytes INTEGER CHECK(bytes >= 0),
  lod_level INTEGER CHECK(lod_level >= 0),
  PRIMARY KEY(asset_id,variant_key),
  CHECK(repository_path IS NOT NULL OR public_url IS NOT NULL)
);

CREATE TABLE IF NOT EXISTS asset_provenance (
  asset_id TEXT PRIMARY KEY REFERENCES assets(asset_id) ON DELETE CASCADE,
  source_name TEXT NOT NULL,
  source_url TEXT,
  original_author TEXT NOT NULL,
  license_evidence_url TEXT,
  reviewed_at TEXT,
  notes TEXT NOT NULL DEFAULT ''
);

CREATE TABLE IF NOT EXISTS asset_relations (
  asset_id TEXT NOT NULL REFERENCES assets(asset_id) ON DELETE CASCADE,
  related_asset_id TEXT NOT NULL REFERENCES assets(asset_id) ON DELETE CASCADE,
  relation_type TEXT NOT NULL CHECK(relation_type IN ('variant','derived_from','part_of','compatible_with')),
  PRIMARY KEY(asset_id,related_asset_id,relation_type),
  CHECK(asset_id <> related_asset_id)
);

-- External-content FTS5 avoids duplicating the entire assets table.
-- Keep triggers in sync for INSERT/UPDATE/DELETE.
CREATE VIRTUAL TABLE IF NOT EXISTS assets_fts USING fts5(
  title, title_zh, description, search_terms,
  content='assets', content_rowid='rowid', tokenize='unicode61'
);
CREATE TRIGGER IF NOT EXISTS assets_ai AFTER INSERT ON assets BEGIN
  INSERT INTO assets_fts(rowid,title,title_zh,description,search_terms)
  VALUES(new.rowid,new.title,new.title_zh,new.description,new.search_terms);
END;
CREATE TRIGGER IF NOT EXISTS assets_ad AFTER DELETE ON assets BEGIN
  INSERT INTO assets_fts(assets_fts,rowid,title,title_zh,description,search_terms)
  VALUES('delete',old.rowid,old.title,old.title_zh,old.description,old.search_terms);
END;
CREATE TRIGGER IF NOT EXISTS assets_au AFTER UPDATE ON assets BEGIN
  INSERT INTO assets_fts(assets_fts,rowid,title,title_zh,description,search_terms)
  VALUES('delete',old.rowid,old.title,old.title_zh,old.description,old.search_terms);
  INSERT INTO assets_fts(rowid,title,title_zh,description,search_terms)
  VALUES(new.rowid,new.title,new.title_zh,new.description,new.search_terms);
END;
