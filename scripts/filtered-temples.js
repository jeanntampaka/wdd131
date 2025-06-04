// Hamburger menu toggle
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('show');
  menuButton.textContent = navigation.classList.contains('show') ? 'X' : '☰';
});

// Temple data array - original 7 + 3 new entries added
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253000,
    imageUrl: "images/temple1.JPG",
  },
  {
    name: "Nauvoo Illinois Temple",
    location: "Nauvoo, Illinois, USA",
    dedicated: "2002-06-27",
    area: 31860,
    imageUrl: "images/temple2.jpg",
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 107000,
    imageUrl: "images/temple3.jpg",
  },
  {
    name: "Cardston Alberta Temple",
    location: "Cardston, Alberta, Canada",
    dedicated: "1923-08-26",
    area: 18500,
    imageUrl: "images/temple4.jpg",
  },
  {
    name: "Bern Switzerland Temple",
    location: "Bern, Switzerland",
    dedicated: "1955-09-11",
    area: 16815,
    imageUrl: "images/temple5.jpg",
  },
  {
    name: "Columbia River Washington Temple",
    location: "Richland, Washington, USA",
    dedicated: "2001-01-13",
    area: 46000,
    imageUrl: "images/temple6.jpg",
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 45000,
    imageUrl: "images/temple7.jpg",
  },
  // Added 3 new temples
  {
    name: "Freiberg Germany Temple",
    location: "Freiberg, Germany",
    dedicated: "1985-06-29",
    area: 17855,
    imageUrl: "images/temple8.jpg",
  },
  {
    name: "Reno Nevada Temple",
    location: "Reno, Nevada, USA",
    dedicated: "2000-04-23",
    area: 10000,
    imageUrl: "images/temple9.jpg",
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 67500,
    imageUrl: "images/temple10.jpg",
  }
];

// Reference to container to hold temple cards
const cardsContainer = document.getElementById('temple-cards');

// Function to create a single temple card HTML element
function createTempleCard(temple) {
  const card = document.createElement('article');
  card.className = 'temple-card';

  const img = document.createElement('img');
  img.src = temple.imageUrl;
  img.alt = temple.name;
  img.loading = 'lazy';

  const name = document.createElement('h3');
  name.textContent = temple.name;

  const location = document.createElement('p');
  location.textContent = `Location: ${temple.location}`;

  const dedicated = document.createElement('p');
  const dedicatedDate = new Date(temple.dedicated);
  dedicated.textContent = `Dedicated: ${dedicatedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}`;

  const area = document.createElement('p');
  area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

  card.appendChild(img);
  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);

  return card;
}

// Function to render temples into the container based on filtered array
function displayTemples(templesToShow) {
  // Clear previous cards
  cardsContainer.innerHTML = '';
  if (templesToShow.length === 0) {
    cardsContainer.textContent = 'No temples match this filter.';
    return;
  }
  templesToShow.forEach(temple => {
    const templeCard = createTempleCard(temple);
    cardsContainer.appendChild(templeCard);
  });
}

// Filter functions
function filterTemples(filter) {
  switch (filter) {
    case 'old':
      return temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    case 'new':
      return temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    case 'large':
      return temples.filter(t => t.area > 90000);
    case 'small':
      return temples.filter(t => t.area < 10000);
    case 'home':
    default:
      return temples;
  }
}

// Event listeners for filter buttons in navigation
const navLinks = document.querySelectorAll('nav.navigation a');
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const filter = event.target.getAttribute('data-filter') || event.target.textContent.toLowerCase();
    const filteredTemples = filterTemples(filter);
    displayTemples(filteredTemples);
  });
});

// Initialize with all temples shown
displayTemples(temples);

// Footer dynamic year and last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
