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

  // Store the API endpoint for all Earthquakes +1.0 magnitude
  var USGS_link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson";
  
  //  GET color radius call to the USGS Link
  d3.json(USGS_link, function(data) {
  function styleInformation(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: getColor(feature.properties.mag),
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
  // set different color from magnitude
  function getColor(mag) {
    switch (true) {
    case mag > 5:
      return "#ea2c2c";
    case mag > 4:
      return "#ea822c";
    case mag > 3:
      return "#ee9c00";
    case mag > 2:
      return "#eecc00";
    case mag > 1:
      return "#d4ee00";
    default:
      return "#98ee00";
    }
  }
});