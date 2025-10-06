// Business Logic

class Place {
  constructor(location, landmarks, time, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.time = time;
    this.notes = notes;
  }

  getSummary() {
    return `${this.location} - Visited in ${this.time}`;
  }
}

class TravelLog {
  constructor() {
    this.places = [];
  }

  addPlace(place) {
    if (!(place instanceof Place)) throw new Error("Only Place instances can be added.");
    this.places.push(place);
  }

  findPlace(location) {
    return this.places.find(place => place.location === location);
  }
}

// UI Logic
const form = document.getElementById('place-form');
const placeList = document.getElementById('place-names');
const detailsSection = document.getElementById('place-details');
const detailsDiv = document.getElementById('details');

const log = new TravelLog();

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const location = document.getElementById('location').value.trim();
  const landmarks = document.getElementById('landmarks').value.split(',').map(l => l.trim());
  const time = document.getElementById('time').value.trim();
  const notes = document.getElementById('notes').value.trim();

  const newPlace = new Place(location, landmarks, time, notes);
  log.addPlace(newPlace);
  displayPlace(newPlace);

  form.reset();
});

function displayPlace(place) {
  const li = document.createElement('li');
  li.textContent = place.location;
  li.addEventListener('click', () => showDetails(place.location));
  placeList.appendChild(li);
}

function showDetails(location) {
  const place = log.findPlace(location);
  if (!place) return;

  detailsDiv.innerHTML = `
    <h3>${place.location}</h3>
    <p><strong>Landmarks:</strong> ${place.landmarks.join(', ')}</p>
    <p><strong>Time of Year:</strong> ${place.time}</p>
    <p><strong>Notes:</strong> ${place.notes}</p>
  `;
  detailsSection.classList.remove('hidden');
}
