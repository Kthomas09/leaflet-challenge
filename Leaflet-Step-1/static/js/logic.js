// Creating initial map object
// Set the longitude, latitude, and the starting zoom level for Charles Town, WV.
// This gets inserted into the div with an id of 'map_id' in index.html
var earthquakeMap = L.map("map_id", {
  center: [39.2890, -77.8597],
  zoom: 5
});