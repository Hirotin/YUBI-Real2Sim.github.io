'use strict';
const filters = document.querySelectorAll('button[data-scene]');
const rows = document.querySelectorAll('tbody tr[data-scene]');
const status = document.getElementById('filter-status');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const scene = button.dataset.scene;
    filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
    rows.forEach(row => { row.hidden = scene !== 'all' && row.dataset.scene !== scene; });
    status.textContent = scene === 'all' ? 'Showing all nine comparisons.' : `Showing three comparisons for ${scene}.`;
  });
});

const artifactViewer = document.getElementById('artifact-viewer');
const gallerySceneButtons = [...document.querySelectorAll('[data-gallery-scene]')];
let galleryArtifact = '';
let galleryLabel = '';
let galleryScene = 'Duo';
function updateArtifactViewer() {
  document.getElementById('artifact-viewer-title').textContent = galleryLabel;
  artifactViewer.querySelector('.viewer-status').textContent = `${galleryScene} / ${galleryLabel}`;
  gallerySceneButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.galleryScene === galleryScene)));
  const views = ['test', 'right', 'left'];
  artifactViewer.querySelectorAll('.viewer-images img').forEach((img, index) => {
    const path = `assets/artifact-gallery/${galleryScene}_${galleryArtifact}_${views[index]}.png`;
    img.alt = `${galleryScene}, ${galleryLabel}: ${index === 0 ? 'held-out scene rendering' : views[index] + ' YUBI wrist observation'}`;
    img.src = path;
    img.parentElement.href = path;
  });
}
document.querySelectorAll('[data-artifact]').forEach(button => {
  button.addEventListener('click', () => {
    galleryArtifact = button.dataset.artifact;
    const tableButton = document.querySelector(`.artifact-results [data-artifact="${galleryArtifact}"]`);
    galleryLabel = tableButton.textContent.replace('↗', '').trim();
    updateArtifactViewer();
    artifactViewer.showModal();
  });
});
gallerySceneButtons.forEach(button => button.addEventListener('click', () => {
  galleryScene = button.dataset.galleryScene;
  updateArtifactViewer();
}));
artifactViewer.querySelector('.viewer-close').addEventListener('click', () => artifactViewer.close());
artifactViewer.addEventListener('click', event => {
  if (event.target !== artifactViewer) return;
  const rect = artifactViewer.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) artifactViewer.close();
});
