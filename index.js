// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;

const day1 = document.getElementById("day-1");
const day2 = document.getElementById("day-2");

const section = document.getElementById("sections-container");

day1.addEventListener("click", function(){
  section.innerHTML = `<li>
  <button id="day1-section-1">SESSION 1</button>
  </li>
  <li>
    <button id="day1-section-2">SESSION 2</button>
  </li>
  <li>
    <button id="day1-section-3">SESSION 3</button>
  </li>`
});

day2.addEventListener("click", function(){
  section.innerHTML = `<li>
  <button id="day1-section-4">SESSION 4</button>
  </li>
  <li>
    <button id="day1-section-5">SESSION 5</button>
  </li>
  <li>
    <button id="day1-section-6">SESSION 6</button>
  </li>`
});