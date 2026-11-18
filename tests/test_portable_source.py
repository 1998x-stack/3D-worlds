"""Real-world representative source graph checks for the Python/MCP export path."""
import sys
from pathlib import Path
import unittest
ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
from services.portable_source import bundle_source

class PortableSourceTests(unittest.TestCase):
    def test_self_contained_source_for_every_family(self):
        cases={
          "chair.js":"createChair",
          "honeycomb_desk_tidy.js":"createHoneycombDeskTidy",
          "moon_phase_light_sleeve.js":"createMoonPhaseLightSleeve",
          "lunar_fox_bust.js":"createLunarFoxBust",
          "monitor_cantilever_bridge.js":"createMonitorCantileverBridge",
          "modular_rail_desk_shelf.js":"createModularRailDeskShelf",
        }
        for name,generator in cases.items():
            with self.subTest(source=name):
                output=bundle_source(ROOT,"src/models/"+name)
                code=output["module"]
                self.assertTrue(output["complete"])
                self.assertIn(generator,code)
                self.assertIn("import * as THREE from 'three';",code)
                self.assertNotIn("from './",code)
                self.assertTrue(output["dependencies"])

    def test_rejects_outside_paths_and_missing_modules(self):
        for path in ("../README.md","src/scene.js","src/models/../../README.md"):
            with self.assertRaises(ValueError):
                bundle_source(ROOT,path)

if __name__=="__main__":
    unittest.main()
