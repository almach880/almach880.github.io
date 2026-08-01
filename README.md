# nealm682.github.io

Personal site for Neal Meinke — a painted-live career and concept map, plus
long-form notes on building AI systems inside real businesses.

**Live:** https://nealm682.github.io/

---

## What this is

The homepage is not a resume. It's an interactive graph rendered on canvas by a
game loop, where every position, size, and opacity is a damped spring solved in
closed form. You can click into a branch, drag a node and throw it, and resize
the reading column against the graph.

The motion system is ported from my [painted-ui](https://github.com/nealm682/painted-ui)
research — an ongoing investigation into reproducing the feeling that a screen
is being painted live by a model, at near-zero marginal cost per user.

## Structure

- `index.html` — shell and the content manifest
- `content/` — **all facts live here**; plain JS files, one per branch
- `assets/` — engine and styling
- `notes/` — long-form interactive notes, one folder each

See [ARCHITECTURE.md](ARCHITECTURE.md) for how to add a node, a branch, a third
layer, or a note.

## Preview

Double-click `index.html` — no build step, no server, no dependencies beyond
Google Fonts.

## Notes

| # | Note |
|---|------|
| 01 | [The Context Layer](notes/context-layer/) |

---

MIT for the code. Written content © Neal Meinke.
