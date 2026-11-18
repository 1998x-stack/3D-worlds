"""Security and metrics checks for the optional local P2 search API."""
import json
from http.server import ThreadingHTTPServer
from pathlib import Path
import os
import sys
import tempfile
import threading
import unittest
from unittest.mock import patch
from urllib.error import HTTPError
from urllib.request import Request, urlopen

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT))
import services.search_api as api
from scripts.catalog import build_catalog

class ApiSecurityTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp=tempfile.TemporaryDirectory()
        cls.original_db=api.DB
        api.DB=Path(cls.temp.name)/"catalog.sqlite"
        build_catalog(api.DB)
        cls.server=ThreadingHTTPServer(("127.0.0.1",0),api.Handler)
        cls.thread=threading.Thread(target=cls.server.serve_forever,daemon=True)
        cls.thread.start()
        cls.base=f"http://127.0.0.1:{cls.server.server_port}"

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join(timeout=2)
        api.DB=cls.original_db
        cls.temp.cleanup()

    def fetch(self,path,token=None):
        headers={"Authorization":"Bearer "+token} if token else {}
        return urlopen(Request(self.base+path,headers=headers),timeout=5)

    def test_token_rejects_unauthorized_queries_and_metrics(self):
        with patch.dict(os.environ,{"THREED_WORLDS_API_TOKEN":"fixture-secret","THREED_WORLDS_RATE_LIMIT_PER_MIN":"0"}):
            for path in ("/api/v1/categories","/metrics"):
                with self.assertRaises(HTTPError) as failure:
                    self.fetch(path)
                self.assertEqual(failure.exception.code,401)
            with self.fetch("/api/v1/categories",token="fixture-secret") as response:
                self.assertEqual(len(json.load(response)),14)
                self.assertTrue(response.headers.get("X-Request-ID"))
            with self.fetch("/metrics",token="fixture-secret") as response:
                self.assertIn("threedworlds_requests_total",response.read().decode())
            with self.fetch("/healthz") as response:
                self.assertTrue(json.load(response)["ok"])

    def test_rate_limiter_returns_429_without_trusting_proxy_header(self):
        api._RATE_BUCKETS.clear()
        with patch.dict(os.environ,{"THREED_WORLDS_API_TOKEN":"fixture-secret","THREED_WORLDS_RATE_LIMIT_PER_MIN":"1"}):
            with self.fetch("/api/v1/categories",token="fixture-secret") as response:
                self.assertEqual(response.status,200)
            with self.assertRaises(HTTPError) as failure:
                self.fetch("/api/v1/categories",token="fixture-secret")
            self.assertEqual(failure.exception.code,429)
        api._RATE_BUCKETS.clear()

    def test_nonloopback_bind_fails_without_explicit_security(self):
        with patch.dict(os.environ,{"THREED_WORLDS_API_TOKEN":"","THREED_WORLDS_ALLOW_UNAUTHENTICATED_PRIVATE":""}):
            with self.assertRaises(RuntimeError):
                api.serve(host="0.0.0.0",port=0)

if __name__=="__main__":
    unittest.main()
