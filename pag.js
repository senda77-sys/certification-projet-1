// Menu mobile interactif
const burgerBtn = document.getElementById('burgerBtn');
const navLinks = document.getElementById('navLinks');

burgerBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Action d'interaction simple
function showAlert() {
  alert('✨ Bienvenue dans mon projet DecodeLabs ! L\'interface est prête à être connectée au Backend.');
}