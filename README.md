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

## Scene verification summary

The NVS-SQA section was updated on October 22, 2026 using the local research repository's `SUPPLEMENTARY.md`, Section 4.1 (Clean scores and coverage deltas) and Section 6.1 (classification counts), checked against the manuscript's scene-verification analysis. Only NVS-SQA metric results are included. Test and OBS counts are correct reliability classifications, not rollout success counts. The All-three target is fitted separately; the constant-prediction baselines provide context for both targets. These results cover three scenes and do not establish a general acceptance rule. The September 16 policy-ranking ledger remains a separate snapshot.

### Test / OBS reference images

Added original, unmodified Flat / Hole54 evaluation images from ABCI and ABCIQ. Test: `abci:/home/ach18394lf/3DGen/outputs/test_view_quality_20260916/Flat/Hole54/frames/frame_0060.png`; its campaign manifest identifies held-out camera poses and GS-only rendering. OBS right/left: `abciq:/groups/qgah50055/qch10159hn/cf_eval_final/outputs/counterfactual_obs_all_crossscore_20260917/Flat_Hole54/frame_f0000/full_composite/hole_54/obs_{R,L}_f0000.png`. The OBS manifest is referenced by ABCI's `counterfactual_nvs_sqa_hole54_hole90_20260917/input/Flat_Hole54.json` (19 frames, two views per frame, mean -1.8820653212697882), matching the reported NVS-SQA OBS value. The directory name reflects a shared evaluation asset set; no additional metric results are presented. Test and OBS examples are distinct viewpoints, not corresponding image pairs.

### OBS housing correction (October 22, 2026)

The website now shows `*-no-housing.png` display re-renders. The original posthoc script `scripts/render_trajectory_obs_pinhole.py` includes camera housing in visual group 1, unlike `robosuite_env/rendering/wrist_fisheye.py`, which excludes geometry names ending in `geometry42_visual`. The circular black border comes from this MuJoCo geometry: the corresponding GS-only images have no border. A separate script copy moves only those two housing geoms to group 5 in the isolated replay model. Same Flat/Hole54 scene, recorded frame 0, camera pose, 518×518 output and 90° FOV; no source robot model or original evaluation files were changed.

ABCIQ job 240768 produced the display images under `/groups/qgah50055/qch10159hn/cf_eval_final/outputs/website_obs_no_housing_20261022/render/`. The patched script and PBS job are retained in its parent directory. Excluded geoms: `gripper0_right_geometry42_visual`, `gripper1_right_geometry42_visual`. The original PNGs remain in `assets/`; the numeric table is unchanged and was not recomputed on the corrected images.

### Full wrist-view illustrations

ABCIQ job 240774 rendered the full native wrist outputs with `_capture_wrist_pending` and `_finalize_wrist_mode`, using the recorded frame 0 and the renderer's `franka-pinhole-wrist-rgb` profile. Output is 719×539 before policy contrast/resize/padding; no additional crop is applied by the website. Files and profiles are retained under `website_obs_full_view_20261022/render/frame_f0000/native_full/` and `native_profiles.json`. The site displays these `*-full.png` illustrations and separately links the original 518×518 NVS-SQA inputs. Scores have not been recomputed.

### Published image-quality comparison (October 22, 2026)

The verification table now includes PSNR, SSIM, LPIPS, NVS-SQA/Test, original NVS-SQA/OBS, housing-removed NVS-SQA/OBS, and the always-reliable baseline, including Pen (45 task-level decisions). Existing rows come from the manuscript's main-test-baseline analysis and supplementary constant baseline; the corrected OBS row comes from the completed all-15-condition housing ablation. Corrected counts are Cup 13/15, Tape 4/15, Pen 15/15, Total 32/45, and separately fitted All-three 4/15. All 60 original OBS predictions were reproduced before substituting corrected scores. The downloadable `assets/verification-results.json` records counts and protocol.

For this ablation, paired housing-present/absent renders define the affected-pixel mask. Corrected RGB is inserted only there, preserving every other archived pixel. This controls for small historical foreground-render drift in seven conditions; eight controls reproduce the archive exactly. All 950 backgrounds and camera poses match. Local evidence: `/Users/hiroki-airoa/Documents/Codex/2026-10-22/nvssqa-all-scenes/analysis.json`; remote evidence: `abciq:/groups/qgah50055/qch10159hn/cf_eval_final/outputs/nvssqa_housing_all15_20261022/`. The full-view illustrations above the table remain distinct from the 518×518 scoring inputs.

The public comparison omits the original OBS row and labels the housing-corrected row simply `NVS-SQA / OBS`. The housing-removal protocol remains documented below the table and in the downloadable JSON.

## Artifact transition summary

The artifact table uses the ordinary / All rows of the manuscript’s `docs/experiments/final_20260917/computed/aggregate_results.csv`. All nine conditions are shown separately, each with nine comparisons including Pen. Counts were checked against `pair_results.csv`, including significance-threshold crossings and strict rank reversals. `assets/artifact-results.json` preserves the counts, definitions, and audit-flag totals. This is the provisional intended-label snapshot with historical nonmatched Clean references, not the restricted execution-audited subset. Public notes explicitly retain that distinction.

## Artifact image viewer

The nine condition names in the transition table and the three artifact card headings open a native dialog. Duo, Flat, and G2 can be selected inside it; each view contains a held-out scene rendering and full right/left YUBI wrist illustrations. Escape, the close button, and backdrop clicks close the dialog. Images link to their original resolution.

Gallery Test images use archived `frame_0060.png` from the condition-specific held-out verification renders, displayed with a CSS 180° rotation. OBS illustrations replay only saved frame 0 using `website_obs_full_view_20261022/render_trajectory_obs_full_view.py`, excluding camera-housing geoms and saving `frame_f0000/native_full/obs_{R,L}_f0000.png` at 719×539. They are full native views before policy contrast adjustment/resizing, distinct from the 518×518 score inputs. No new policy rollouts or real-robot operations are involved. Remote evidence: `abciq:/groups/qgah50055/qch10159hn/cf_eval_final/outputs/website_artifact_gallery_20261022/`; jobs 240939–240941. The gallery manifest records source paths and file hashes.

## Orbit replacement and simplified artifact table

The artifact viewer now embeds a 360° orbit video in place of its held-out pinhole image. The right/left OBS images remain unchanged. Videos are H.264, 960×720, 240 frames at 24 fps (10 seconds), with fast-start metadata and native playback controls. They loop muted while open, pause on close, and do not auto-play when reduced motion is requested.

Holes 54°/90°, Floaters mid, and Warping use the archived ABCI `3DGen/outputs/orbit_near_20260916` campaign (12 videos). Missing Floaters low/high and the three capture-coverage variants are rendered offline on ABCIQ in `cf_eval_final/outputs/website_orbit_20261022`, using the matching gallery scene and saved initial state (jobs 240962, 240964, 240966). The camera follows the existing 1.25 m, 360° orbit with 25–55° elevation. Archived orbit task setups can differ from the OBS setup; this is explicitly noted in the viewer. `assets/artifact-orbits/manifest.json` records the video sources and hashes.

The artifact table and downloadable summary now show significance-threshold changes and strict ranking reversals only. Real-world agreement and Tied columns were removed at the user's request; ties are excluded from strict reversals.
