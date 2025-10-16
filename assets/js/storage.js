// storage.js - Shared logic for saving/fetching/deleting/exporting entries via localStorage
// Used by both form.js and admin.js

const STORAGE_KEY = 'cardFormEntries';

/**
 * Save a new entry to localStorage
 * @param {Object} entry - Card form entry object
 */
function saveEntry(entry) {
  const entries = getEntries();
  entries.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

/**
 * Get all entries from localStorage
 * @returns {Array}
 */
function getEntries() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

/**
 * Delete an entry by index
 * @param {number} idx
 */
function deleteEntry(idx) {
  const entries = getEntries();
  entries.splice(idx, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

/**
 * Export entries as CSV
 * @returns {string}
 */
function exportCSV() {
  const entries = getEntries();
  if (!entries.length) return '';
  const keys = Object.keys(entries[0]);
  const csvRows = [keys.join(',')];
  for (const entry of entries) {
    csvRows.push(keys.map(k => '"' + (entry[k] || '') + '"').join(','));
  }
  return csvRows.join('\n');
}

/**
 * Export entries as JSON
 * @returns {string}
 */
function exportJSON() {
  return JSON.stringify(getEntries(), null, 2);
}
