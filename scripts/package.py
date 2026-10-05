"""Package theme assets and an example vault using Python's standard library."""
from pathlib import Path
import hashlib
import json
import shutil
import subprocess
import zipfile

ROOT = Path(__file__).resolve().parents[1]
subprocess.run(['node', str(ROOT / 'scripts/check.cjs')], cwd=ROOT, check=True)
manifest = json.loads((ROOT / 'manifest.json').read_text())
version = manifest['version']
DIST = ROOT / 'dist'
DIST.mkdir(exist_ok=True)
theme_files = {name: (ROOT / name).read_bytes() for name in ['manifest.json', 'theme.css']}


def archive(name, entries):
    """Use fixed timestamps so unchanged inputs produce reproducible ZIPs."""
    target = DIST / name
    with zipfile.ZipFile(target, 'w', zipfile.ZIP_DEFLATED, compresslevel=9) as output:
        for entry, data in sorted(entries.items()):
            assert not entry.startswith('/') and '..' not in Path(entry).parts
            info = zipfile.ZipInfo(entry, date_time=(1980, 1, 1, 0, 0, 0))
            info.create_system = 3
            info.external_attr = 0o100644 << 16
            info.compress_type = zipfile.ZIP_DEFLATED
            output.writestr(info, data, compresslevel=9)
    with zipfile.ZipFile(target) as output:
        assert output.testzip() is None
        assert set(output.namelist()) == set(entries)
        for entry, data in entries.items():
            assert output.read(entry) == data
    return target


theme = archive(f'ink-{version}.zip', {'ink/' + name: data for name, data in theme_files.items()})
with zipfile.ZipFile(theme) as output:
    assert sorted(output.namelist()) == ['ink/manifest.json', 'ink/theme.css']

example = ROOT / 'examples/ink-test-vault'
entries = {}
for file in sorted((example / 'ink测试场景').rglob('*')):
    if file.is_file():
        assert not file.is_symlink()
        entries['ink 测试库/' + file.relative_to(example).as_posix()] = file.read_bytes()
for name in ['app.json', 'appearance.json', 'community-plugins.json', 'core-plugins.json', 'types.json']:
    entries['ink 测试库/.obsidian/' + name] = (example / '.obsidian' / name).read_bytes()
entries['ink 测试库/README.md'] = (example / 'README.md').read_bytes()
for name, data in theme_files.items():
    entries['ink 测试库/.obsidian/themes/ink/' + name] = data
tests = archive(f'ink-tests-{version}.zip', entries)
with zipfile.ZipFile(tests) as output:
    prefix = 'ink 测试库/.obsidian/themes/ink/'
    assert sorted(name[len(prefix):] for name in output.namelist() if name.startswith(prefix)) == sorted(theme_files)
    for name, data in theme_files.items():
        assert output.read(prefix + name) == data

for name in theme_files:
    shutil.copyfile(ROOT / name, DIST / name)
release = [DIST / 'manifest.json', DIST / 'theme.css', theme, tests]
sums = [hashlib.sha256(file.read_bytes()).hexdigest() + '  ' + file.name for file in release]
(DIST / 'SHA256SUMS').write_text('\n'.join(sums) + '\n')
print(f'Packaged ink {version}: two-file theme ZIP, example-vault ZIP, raw theme assets and SHA256SUMS in dist/.')
