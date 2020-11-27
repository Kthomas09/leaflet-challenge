// Creating initial map object
// Set the longitude, latitude, and the starting zoom level for Charles Town, WV.
// This gets inserted into the div with an id of 'map_id' in index.html
var earthquakeMap = L.map("map_id", {
  center: [39.2890, -77.8597],
  zoom: 5
});

 // Adding a tile layer (the background map image) to the map
  // Use the addTo method to add objects to the earthquakeMap
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(earthquakeMap);