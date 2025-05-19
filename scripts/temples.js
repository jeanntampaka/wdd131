// Hamburger menu
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.textContent = navigation.classList.contains('open') ? 'X' : '☰';
});

// Footer dynamic year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
