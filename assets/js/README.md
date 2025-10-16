# JS Assets Overview

- `storage.js`: Shared logic for saving, fetching, deleting, and exporting card form entries using localStorage. Used by both the payment form and admin dashboard.
- `form.js`: Handles payment form validation and saving entries to localStorage. Connects with `storage.js`.
- `admin.js`: Handles dashboard logic for viewing, deleting, and exporting entries. Connects with `storage.js`.

**How frontend and admin connect:**
- When a payment is submitted on `/index.html`, the entry is saved to localStorage via `saveEntry()`.
- The admin dashboard (`/admin.html`) loads all entries from localStorage and displays them in a table. You can view, delete, or export entries.
- All logic is vanilla JS and can be replaced with backend API calls later if needed.
