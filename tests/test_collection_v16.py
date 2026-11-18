"""v1.6 new original assets and semantic integrity checks."""
import json
import math
import unittest
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]

class V16ModelCollectionTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.collection=json.loads((ROOT/'catalog/collections/v16.json').read_text(encoding='utf8'))
        cls.assets=json.loads((ROOT/'catalog/models.json').read_text(encoding='utf8'))['assets']
        cls.by_id={a['id']:a for a in cls.assets}

    def test_inventory_and_preserved_history(self):
        self.assertEqual(len(self.assets),625)
        self.assertEqual(len(self.by_id),625)
        self.assertEqual(len({a['slug'] for a in self.assets}),625)
        self.assertEqual(self.collection['asset_count'],30)
        self.assertEqual(self.collection['category_count'],13)
        self.assertEqual(sum(self.collection['category_counts'].values()),30)
        self.assertEqual(len(self.collection['assets']),30)
        self.assertEqual([a['id'] for a in self.assets[-30:]], [e['id'] for e in self.collection['assets']])
        self.assertEqual(sum(a.get('collection')=='v1.5' for a in self.assets),30)
        self.assertEqual(sum(a.get('collection')=='v1.6' for a in self.assets),30)
        self.assertEqual(self.collection['manufacturing_status'],'not_audited')
        self.assertEqual(self.collection['sales_status'],'not_measured')

    def test_per_asset_semantic_geometry(self):
        signatures=set()
        for e in self.collection['assets']:
            with self.subTest(id=e['id']):
                a=self.by_id[e['id']]
                self.assertEqual(a['collection'],'v1.6')
                self.assertEqual(a['kind'],'procedural')
                self.assertEqual(a['license'],'MIT')
                self.assertEqual(a['author'],'3D Worlds')
                self.assertEqual(a['source_path'],e['source_path'])
                self.assertEqual(a['generator'],e['generator'])
                self.assertEqual(a['dimensions_m'],e['dimensions_m'])
                self.assertEqual(e['manufacturing_status'],'not_audited')
                self.assertIn(e['inspiration_channel'],{'amazon','ebay','hacker-news'})
                src=(ROOT/a['source_path']).read_text(encoding='utf8')
                self.assertIn('export function '+a['generator']+'()',src)
                meta=json.loads(src.split('export const assetMeta = ',1)[1].split(';\nexport function',1)[0])
                spec=json.loads(src.split('return buildRecipe(',1)[1].split(');',1)[0])
                self.assertEqual(meta,a)
                self.assertEqual(spec['title'],a['title'])
                self.assertEqual(spec['dimensions'],a['dimensions_m'])
                self.assertEqual(spec['geometry_revision'],'1.6.0')
                self.assertEqual(len(spec['parts']),e['part_count'])
                self.assertGreaterEqual(len(spec['parts']),25)
                names=[p['n'] for p in spec['parts']]
                self.assertEqual(len(names),len(set(names)))
                signatures.add(tuple(names))
                for p in spec['parts']:
                    self.assertIn(p['t'],{'box','rounded-box','cylinder','torus','sphere','hex','rod'})
                    if p['t']=='rod':
                        self.assertGreater(p['r'],0)
                        self.assertNotEqual(p['from'],p['to'])
                    else:
                        self.assertTrue(all(isinstance(v,(int,float)) and math.isfinite(v) and v>0 for v in p['s']))
                        self.assertTrue(all(math.isfinite(v) for v in p['p']))
        self.assertEqual(len(signatures),30)

    def test_unusual_function_geometry_is_not_only_a_title(self):
        requirements={
          'canal-litter-skimmer-boat':['float-hull-1','float-hull--1','capture-rake-tooth-0'],
          'folding-warehouse-dolly':['rear-wheel-1','rear-wheel--1','folding-noseplate'],
          'compact-microscope-focus-stage':['objective-glass','specimen-slide','focus-column-1'],
          'seismic-cross-brace-study':['ascending-X-brace','descending-X-brace','gusset-0'],
          'intertidal-tidepool-study':['tidal-pool-0','sea-star-ray-0','seagrass-0'],
          'adaptive-cycle-lane-bollard-node':['spring-bollard-0','cycling-chevron-0','raised-curb'],
          'e-paper-ambient-dashboard':['paper-display','selection-dial','dashboard-tile-0'],
          'alien-microbe-observation-vault':['culture-cell-0','alien-culture-0','observation-console'],
        }
        for slug,parts in requirements.items():
            with self.subTest(slug=slug):
                raw=(ROOT/'src/models'/(slug.replace('-','_')+'.js')).read_text(encoding='utf8')
                spec=json.loads(raw.split('return buildRecipe(',1)[1].split(');',1)[0])
                names={p['n'] for p in spec['parts']}
                self.assertTrue(set(parts).issubset(names),set(parts)-names)

if __name__=='__main__': unittest.main()
