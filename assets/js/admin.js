// admin.js - Handles dashboard logic for viewing, deleting, exporting entries
// Connects with storage.js for entry management

document.addEventListener('DOMContentLoaded', function() {
  renderTable();

  document.getElementById('exportCSV').onclick = function() {
    const csv = exportCSV();
    downloadFile('entries.csv', csv);
  };
  document.getElementById('exportJSON').onclick = function() {
    const json = exportJSON();
    downloadFile('entries.json', json);
  };
});

function renderTable() {
  const entries = getEntries();
  const tbody = document.getElementById('entriesTable');
  tbody.innerHTML = '';
  entries.forEach((entry, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="px-4 py-2">${idx+1}</td>
      <td class="px-4 py-2">${entry.name}</td>
      <td class="px-4 py-2">${entry.card}</td>
      <td class="px-4 py-2">${entry.amount}</td>
      <td class="px-4 py-2">${entry.date}</td>
      <td class="px-4 py-2 flex gap-2">
        <button class="viewBtn px-2 py-1 bg-blue-500 text-white rounded" data-idx="${idx}">View</button>
        <button class="deleteBtn px-2 py-1 bg-red-500 text-white rounded" data-idx="${idx}">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  // Attach event listeners
  tbody.querySelectorAll('.viewBtn').forEach(btn => {
    btn.onclick = function() { showModal(entries[this.dataset.idx]); };
  });
  tbody.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.onclick = function() { deleteEntry(this.dataset.idx); renderTable(); };
  });
}

function showModal(entry) {
  const modal = document.getElementById('entryModal');
  const content = document.getElementById('modalContent');
  content.innerHTML = Object.entries(entry).map(([k,v]) => `<div><strong>${k}:</strong> ${v}</div>`).join('');
  modal.classList.remove('hidden');
  document.getElementById('closeModal').onclick = function() {
    modal.classList.add('hidden');
  };
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}
