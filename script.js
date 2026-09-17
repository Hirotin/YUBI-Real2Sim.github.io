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
