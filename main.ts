// The Worst Pizza Topping — program/v1 entry.
//
// Writes exactly one funny line (129 chars, under the 200-char cap)
// pitching a terrible pizza topping to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic: no clock, no randomness,
// no network.
//
// The joke's turn: the topping is the pizzeria's own unsold pizzas,
// recycled and sold back to you — a pitch that sells the failure itself,
// with "served with a straight face" as the deadpan landing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pitch: a pizza topped with all the pizzas nobody bought —
// blended, re-baked, and served with a straight face.
const ENTRY =
  "Our new special: a pizza topped with all the pizzas we couldn't sell — blended, re-baked, and served to you with a straight face.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
