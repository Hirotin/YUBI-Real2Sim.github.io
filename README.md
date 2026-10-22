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
