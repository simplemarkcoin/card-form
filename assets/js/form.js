// form.js - Handles payment form logic and saving to localStorage
// Connects with storage.js for entry saving

// Load shared storage logic
// <script src="/assets/js/storage.js"></script> should be included in HTML if needed

// Form validation and submission
const form = document.getElementById('checkoutForm');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  // Simple validation
  let valid = true;
  ['street','city','state','zip','card_name','card_number','expiry','cvv'].forEach(id => {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      document.getElementById('error-' + id).textContent = 'Required.';
      document.getElementById('error-' + id).classList.remove('hidden');
      valid = false;
    } else {
      document.getElementById('error-' + id).classList.add('hidden');
    }
  });
  if (!valid) return;

  // Save entry to localStorage
  const entry = {
    name: form.card_name.value,
    card: form.card_number.value.replace(/\s+/g, '').replace(/.(?=.{4})/g, '*'), // Mask all but last 4
    amount: '100.00', // Demo amount
    date: new Date().toLocaleString(),
    street: form.street.value,
    city: form.city.value,
    state: form.state.value,
    zip: form.zip.value,
    expiry: form.expiry.value,
    cvv: form.cvv.value
  };
  saveEntry(entry); // From storage.js
  form.reset();
  alert('Payment submitted!');
});
