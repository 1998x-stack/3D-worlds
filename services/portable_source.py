"""Pure-Python, dependency-complete source compositor for local MCP consumers.

The dependency graph is restricted to src/models/*.js and never executes model
code. Returned ESM must still be tested by an independent Node consumer.
"""
from __future__ import annotations
from pathlib import Path
import re

IMPORT = re.compile(r'^[ \t]*import\s+(.+?)\s+from\s+[\'"]([^\'"]+)[\'"]\s*;?[ \t]*$', re.M)
EXPORT = re.compile(r'^[ \t]*export\s+(?:async\s+)?(?:function|const|let|var|class)\s+([A-Za-z_$][\w$]*)', re.M)
FILENAME = re.compile(r'^[a-zA-Z0-9_-]+\.js$')
IDENT = re.compile(r'^[a-zA-Z_$][\w$]*$')
STRIP_EXPORT = re.compile(r'(^|\n)([ \t]*)export\s+(?=(?:async\s+)?(?:function|const|let|var|class)\s+)')

def _file_name(name: str) -> str:
    if not FILENAME.fullmatch(name):
        raise ValueError("Unsafe model directory module: " + name)
    return name

def _bind(clause: str, dep: str) -> str:
    clause = clause.strip()
    if clause.startswith("{") and clause.endswith("}"):
        names = []
        for item in clause[1:-1].split(","):
            item = item.strip()
            if not item:
                continue
            parts = re.fullmatch(r"([\w$]+)(?:\s+as\s+([\w$]+))?", item)
            if not parts or not IDENT.fullmatch(parts[1]) or (parts[2] and not IDENT.fullmatch(parts[2])):
                raise ValueError("Unsupported local import: " + clause)
            names.append(parts[1] + (": " + parts[2] if parts[2] else ""))
        return "const { " + ", ".join(names) + " } = " + dep + ";"
    m = re.fullmatch(r"\*\s+as\s+([\w$]+)", clause)
    if m:
        return "const " + m[1] + " = " + dep + ";"
    if IDENT.fullmatch(clause):
        return "const " + clause + " = " + dep + ".default;"
    raise ValueError("Unsupported local import: " + clause)

def bundle_source(root: Path, source_path: str, title: str = "") -> dict:
    root = Path(root).resolve()
    model_dir = (root / "src" / "models").resolve()
    entry_path = (root / source_path).resolve()
    if not entry_path.is_relative_to(model_dir) or entry_path.parent != model_dir:
        raise ValueError("Source path outside trusted model directory")
    entry = _file_name(entry_path.name)
    modules: dict[str, dict] = {}
    active: set[str] = set()
    extra: list[str] = []

    def visit(name: str) -> None:
        name = _file_name(name)
        if name in modules:
            return
        if name in active or len(modules) + len(active) > 64:
            raise ValueError("Circular/oversized dependency graph: " + name)
        active.add(name)
        try:
            source = (model_dir / name).read_text(encoding="utf-8")
            bindings = []
            for m in IMPORT.finditer(source):
                clause, spec = m.group(1), m.group(2)
                if spec.startswith("."):
                    if not spec.startswith("./"):
                        raise ValueError("Import escapes model root: " + spec)
                    dependency = _file_name(spec[2:])
                    visit(dependency)
                    bindings.append((dependency, clause))
                elif not (spec == "three" and re.fullmatch(r"\*\s+as\s+THREE", clause.strip())):
                    if not re.fullmatch(r"[\w@./-]+", spec):
                        raise ValueError("Unsafe package specifier: " + spec)
                    statement = m.group(0).strip()
                    if statement not in extra:
                        extra.append(statement)
            cleaned = IMPORT.sub("", source)
            if re.search(r"^[ \t]*import\s+", cleaned, re.M):
                raise ValueError("Unsupported import syntax: " + name)
            exported = EXPORT.findall(cleaned)
            if not exported or len(exported) != len(set(exported)):
                raise ValueError("Missing/ambiguous named exports: " + name)
            modules[name] = {
                "bindings": bindings,
                "exports": exported,
                "body": STRIP_EXPORT.sub(r"\1\2", cleaned)
            }
        finally:
            active.remove(name)

    visit(entry)
    names = {key: "__dwm" + str(i) for i, key in enumerate(modules)}
    chunks = []
    for name, detail in modules.items():
        bindings = "\n".join(_bind(clause, names[dep]) for dep, clause in detail["bindings"])
        chunks.append(
            "const " + names[name] + " = (() => {\n" + bindings +
            "\n// Bundled from src/models/" + name + "\n" +
            detail["body"] + "\nreturn { " +
            ", ".join(detail["exports"]) + " };\n})();"
        )
    header = (
        "// 3D Worlds portable source: " + (title or entry).replace("\n", " ")[:140] + "\n" +
        "// npm install three; license/provenance in catalog and bundled source.\n" +
        "import * as THREE from 'three';\n"
    )
    source = (header + "\n".join(extra) + "\n" + "\n\n".join(chunks) +
              "\nexport const { " + ", ".join(modules[entry]["exports"]) +
              " } = " + names[entry] + ";\n")
    return {"module": source, "dependencies": list(modules.keys()),
            "entry": entry, "complete": True}
