
import os, re, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[1]

def test_index_exists():
    assert (ROOT/'index.html').exists()

def test_asset_paths():
    content = ''
    for ext in ('.html','.css','.js','.ts','.tsx','.jsx'):
        for p in ROOT.rglob(f'*{ext}'):
            try:
                content += p.read_text(encoding='utf-8')
            except Exception:
                pass
    for m in re.finditer(r'["\'](/[^"\']+)["\']', content):
        path = m.group(1).lstrip('/')
        if (ROOT/'public'/path).exists():
            continue
        assert (ROOT/path).exists(), f'Missing asset: {path}'
