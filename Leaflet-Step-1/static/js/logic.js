
// // Grabing the MapBox API 
// var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia3Rob21hMDkiLCJhIjoiY2tnaDN5NDFrMTd2aTJycGQ2d3gxN2RuaSJ9.QN5CFnVbR4EvaQOWZcrW-Q", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: "pk.eyJ1Ijoia3Rob21hMDkiLCJhIjoiY2tnaDN5NDFrMTd2aTJycGQ2d3gxN2RuaSJ9.QN5CFnVbR4EvaQOWZcrW-Q"
// });

// // Creating a variable to append a map to the mapID div in the index.html
// var earthquakeMap = L.map("map_id", {
//     center: [37.7749, -122.4194],
//     zoom: 5,
//     layers: [streetmap]
// });

// var baseMaps = {
//     "Street Map": streetmap
// };


// Function to determine marker size based on population
function markerSize(population) {
    return population / 40;
  }
  
  // An array containing all of the information needed to create city and state markers
  var locations = [
    {
      coordinates: [40.7128, -74.0059],
      state: {
        name: "New York State",
        population: 19795791
      },
      city: {
        name: "New York",
        population: 8550405
      }
    },
    {
      coordinates: [34.0522, -118.2437],
      state: {
        name: "California",
        population: 39250017
      },
      city: {
        name: "Lost Angeles",
        population: 3971883
      }
    },
    {
      coordinates: [41.8781, -87.6298],
      state: {
        name: "Illinois",
        population: 12671821
      },
      city: {
        name: "Chicago",
        population: 2695598
      }
    },
    {
      coordinates: [29.7604, -95.3698],
      state: {
        name: "Texas",
        population: 26960000
      },
      city: {
        name: "Houston",
        population: 2296224
      }
    },
    {
      coordinates: [41.2524, -95.9980],
      state: {
        name: "Nebraska",
        population: 1882000
      },
      city: {
        name: "Omaha",
        population: 446599
      }
    }
  ];
  
  // Define arrays to hold created city and state markers
  var cityMarkers = [];
  var stateMarkers = [];
  
  // Loop through locations and create city and state markers
  for (var i = 0; i < locations.length; i++) {
    // Setting the marker radius for the state by passing population into the markerSize function
    stateMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "white",
        fillColor: "white",
        radius: markerSize(locations[i].state.population)
      })
    );
  
    // Setting the marker radius for the city by passing population into the markerSize function
    cityMarkers.push(
      L.circle(locations[i].coordinates, {
        stroke: false,
        fillOpacity: 0.75,
        color: "purple",
        fillColor: "purple",
        radius: markerSize(locations[i].city.population)
      })
    );
  }
  
  // Create base layers
  
  // Streetmap Layer
  var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  });
  
  var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });
  
  // Create two separate layer groups: one for cities and one for states
  var states = L.layerGroup(stateMarkers);
  var cities = L.layerGroup(cityMarkers);
  
  // Create a baseMaps object
  var baseMaps = {
    "Street Map": streetmap,
    "Dark Map": darkmap
  };
  
  // Create an overlay object
  var overlayMaps = {
    "State Population": states,
    "City Population": cities
  };
  
  // Define a map object
  var myMap = L.map("map_id", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streetmap, states, cities]
  });
  
  // Pass our map layers into our layer control
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
  
// earthquakeMap.addTo(streetmap);

// Add the layer control to the map
// L.control.layers(baseMaps, {
//     collapsed: false
//   }).addTo(earthquakeMap);

// API link for the USGA (All Earthquakes within the Week)
// var usga_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// // Calling the URL 
// d3.json(usga_url, function (data) {
//     console.log(data)
//     function infoStyle(feature) {
//         return {
//             Opacity: 1,
//             fillOpacity: 1,
//             fillColor: getColor(feature.properties.mag),
//             color: "#000000",
//             radius: getRadius(feature.properties.mag),
//             stroke: true,
//             weight: 0.5
//         };
//     }
//     function getColor(mag) {
//         switch (true) {
//             case mag > 5:
//                 return "#FC0000";
//             case mag > 4:
//                 return "#FF8000";
//             case mag > 3:
//                 return "#FFFF00";
//             case mag > 2:
//                 return "#78FF00";
//             case mag > 1:
//                 return "#00FFFB";
//         }
//     }

//     function getRadius (mag) {
//         if (mag === 0) {
//             return 1;
//         }
//         return mag * 4;
//     }

//     L.geoJson(data, {
//         pointToLayer: function(feature, lating) {
//             return L.circleMarker(lating);
//         },
//         style: infoStyle,
//         onEachFeature: function(feature, layer) {
//             layer.bindPopup("Magnitude: " + feature.properties.mag + "<br> Location: " + feature.properties.place);
//         }
//     }).addTo(earthquakeMap);
// });
