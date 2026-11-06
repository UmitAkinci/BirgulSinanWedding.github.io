const petals = document.getElementById('petals');
for (let i = 0; i < 22; i++) {
  const petal = document.createElement('span');
  petal.className = 'petal';
  petal.textContent = ['✧', '❀', '♡', '·'][i % 4];
  petal.style.left = `${Math.random() * 100}%`;
  petal.style.animationDuration = `${8 + Math.random() * 12}s`;
  petal.style.animationDelay = `${-Math.random() * 15}s`;
  petal.style.fontSize = `${10 + Math.random() * 15}px`;
  petals.appendChild(petal);
}

// Tarihi index.html ve aşağıdaki hedef tarih satırından düzenleyebilirsiniz.
const targetDate = new Date('2026-12-05T19:00:00+03:00').getTime();
function updateCountdown() {
  let remaining = Math.max(0, targetDate - Date.now());
  document.getElementById('days').textContent = Math.floor(remaining / 86400000);
  document.getElementById('hours').textContent = String(Math.floor(remaining % 86400000 / 3600000)).padStart(2, '0');
  document.getElementById('minutes').textContent = String(Math.floor(remaining % 3600000 / 60000)).padStart(2, '0');
  document.getElementById('seconds').textContent = String(Math.floor(remaining % 60000 / 1000)).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const dialog = document.getElementById('rsvp-dialog');
document.getElementById('open-rsvp').addEventListener('click', () => dialog.showModal());
document.getElementById('close-rsvp').addEventListener('click', () => dialog.close());
document.getElementById('rsvp-form').addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.hidden = true;
  document.getElementById('success').hidden = false;
});
