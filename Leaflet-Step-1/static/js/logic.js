// Creating a variable to append a map to the mapID div in the index.html
var earthquakeMap = L.map("mapid", {
    center: [37.7749, -122.4194],
    zoom: 5
});

// Grabing the MapBox API 
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
}).addTo(earthquakeMap);

// API link for the USGA (All Earthquakes within the Week)
var usga_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Calling the URL 
d3.json(usga_url, function (data) {
    console.log(data)
    function infoStyle(feature) {
        return {
            Opacity: 1,
            fillOpacity: 1,
            fillColor: getColor(feature.properties.mag),
            color: "#000000",
            radius: getRadius(features.properties.mag),
            stroke: true,
            weight: 0.5
        };
    }
    function getColor(mag) {
        switch (true) {
            case mag > 5:
                return "#FC0000";
            case mag > 4:
                return "#FF8000";
            case mag > 3:
                return "#FFFF00";
            case mag > 2:
                return "#78FF00";
            case mag > 1:
                return "#00FFFB";
        }
    }

    function getRadius (mag) {
        if (mag === 0) {
            return 1;
        }

        return mag * 4;
    }
});
