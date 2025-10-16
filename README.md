# Card Payment Form & Admin Dashboard

## Structure
- `/index.html`: Payment form (Tailwind, vanilla JS)
- `/admin.html`: Admin dashboard for viewing entries
- `/assets/js/`: Shared JS logic

## How it works
- Payment form saves entries to localStorage (simulating backend)
- Admin dashboard loads, views, deletes, and exports entries from localStorage
- All logic is vanilla JS and can be replaced with backend API calls later

## To test:
1. Open `index.html` and submit a payment
2. Open `admin.html` to view/manage entries
