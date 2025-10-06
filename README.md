# 🧭 Travel Tracker Website

A simple website where you can keep track of all the places you've been. Built with **HTML**, **CSS**, and **JavaScript**, using **Object-Oriented Programming** and **Test-Driven Development** (TDD).

---

## 📌 Features

- Add new places with details like:
  - Location
  - Landmarks
  - Time of year
  - Personal notes
- View details of each place when clicked
- Responsive layout for mobile

---

## 🧪 Test-Driven Development

We used **TDD** to build the business logic for `Place` and `TravelLog` classes.

### ✅ Test 1: Create Place object

```javascript
// Test
const place = new Place("Paris", ["Eiffel Tower"], "Summer 2023", "Amazing trip!");
console.assert(place.location === "Paris", "Test 1 Failed: Place location should be Paris");
