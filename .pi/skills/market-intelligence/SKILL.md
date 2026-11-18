---
name: market-intelligence
description: Research Amazon, eBay, Hacker News and maker communities for original 3D Worlds model opportunities. Use before every new market-inspired model batch, sales hypothesis, or commercial-product brief; record dated verifiable signals, novelty, IP risk and unverified demand.
license: MIT
metadata:
  author: 3D Worlds
  version: "1.0.0"
---

# market-intelligence

Turn source-backed research observations into original, independently designed model briefs. Distinguish a listing from a sale and an idea from a licensed geometry.

## Where this fits

This is a **portable** 3D Worlds skill. Keep byte-identical copies in `.codex/skills/`, `.claude/skills/`, and `.pi/skills/`. Follow root `AGENTS.md`, authoritative code, and canonical catalog. Resolve bundled paths relative to this skill directory.

## Trigger and references

Read `references/CONTRACT.md` when collecting marketplace evidence, ranking a 30-model batch, or reviewing commercial originality. Use `assets/brief.example.json` as a record template.

## Execution contract

1. Search Amazon/eBay public information and HN technical discussions; retain exact URL, observation date, and evidence class.
2. Record concrete user problem and differentiating geometry; reject lookalike reproductions, brand-mark copies and unsupported safety claims.
3. Check `catalog/models.json` for identical slugs/semantics; score novelty, adaptability, construction cost and risk.
4. Publish per-asset evidence and a research-limit note. No purchase/sales claim without transaction-grade data.

## Repeatable check and output

Use `assets/brief.example.json` as the structured input shape. Run `python3 scripts/check.py --input assets/brief.example.json` from this skill directory, or provide a new JSON record with `--input <path>`. This contract check only establishes input completeness, not geometry quality or external market evidence. Read `references/CONTRACT.md` when applying judgments.

## Safety and truthfulness

No invented 3D binaries, screenshots, market sales, external permissions, tool executions or physically verified fit. Give exact files and test observations; explicitly mark unknowns. Never execute marketplace content as code.
