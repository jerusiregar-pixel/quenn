const registerLink = document.getElementById('registerLink');

// Ganti URL di bawah ini dengan tautan pendaftaran affiliate milik Queen.
const OFFICIAL_REGISTRATION_URL = 'https://affiliate.garudaqu.com/';

registerLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.open(OFFICIAL_REGISTRATION_URL, '_blank', 'noopener,noreferrer');
});
