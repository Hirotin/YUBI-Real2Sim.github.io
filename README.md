# YUBI-Real2Sim project website

Static research project page for **YUBI-Real2Sim: 3DGS Scene Verification for Reliable Policy Evaluation**.

Published with GitHub Pages from the root of `main`:
https://hirotin.github.io/YUBI-Real2Sim.github.io/

The repository name differs from the account name, so this is a project site under `/YUBI-Real2Sim.github.io/`.

## Preview

No build or dependencies are required. Run `python3 -m http.server 8000` in this directory and open http://localhost:8000.

- `index.html`: content, metadata, and accessible static results table.
- `styles.css`: responsive layout, including reduced-motion support.
- `script.js`: progressive enhancement for filtering results by scene. The complete table is available without JavaScript.
- `assets/results.json`: September 16, 2026 supplied count ledger.
- `assets/`: existing research images plus a generated typographic social card (`og.png`). The social card is decorative; it does not depict measured scientific results.

## Content provenance

Research title, author order, affiliations, method, and images were drawn from the local `icra2026_yubi-real2sim` manuscript and figure assets on September 17, 2026. The paper contains unfinished sections, so the draft PDF and unverified quantitative claims are not published here.

The table uses `docs/experiments/ranking/plot_data.json` (supplied fixed-80 results dated September 16), including Flat Cup counts of 30/80 and 59/80. Earlier manuscript prose uses a different Flat Cup snapshot. The 8/9 (88.9%) result is preliminary and exploratory. Historical cohort caveats from `docs/experiments/ranking/README.md` are disclosed in the expandable interpretation note; excluding the noted three comparisons leaves 5/6 (83.3%).

The public project README identifies the code as early development without a runnable pipeline. Do not claim code, a paper, or datasets have been released until working public destinations are available.

When results change, update the JSON, HTML table, headline, scene buttons, scope notes, and date together. Keep counts and denominators explicit. Scientific images are copied from the project without generative modification.
