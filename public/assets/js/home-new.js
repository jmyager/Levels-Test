let lat;
let lon;
let kerrLat = 36.588792;
let kerrLon = -78.352668;
let closeLakes = [];
let oldDistance = 0;
let newDistance = 0;
var x = document.getElementById("noLocation");
let lakeData;
let lakeTemplate = '';

// get all of our lake data
$.ajax({
    url: "/api/lake-data",
    method: "GET",
})
    .then(function (data) {
        console.log(data);
        lakeData = data;

        $('#locateBtn').on('click', function () {
            $('#lakeContainer').show();

            // run get location function
            getLocation(function (lat, lon) {
                console.log(lat + ", " + lon);

                // loop through lake data (right now only NC)
                lakeData[19].lakes.forEach(function (lake) {
                    // calculate our distance between user and each lake
                    newDistance = distance(lat, lon, lake.lat, lake.long, "M")
                    // collect the first 10 regardless
                    if (closeLakes.length < 10) {
                        closeLakes.push({
                            name: lake.bodyOfWater,
                            distance: newDistance,
                            href: lake.href
                        });
                    }
                    // if ten have already been collected
                    else {
                        // loop through those ten
                        for (var i = 0; i < closeLakes.length; i++) {
                            // and check if the next lake we're looking at is closer
                            if (closeLakes[i].distance > newDistance) {
                                // if it is splice it into closeLakes (while removing the larger one);
                                closeLakes.splice(i, 1, { name: lake.bodyOfWater, distance: newDistance, href: lake.href });
                                break;
                            }
                        }
                    }
                });

                // sort by ascending distance
                console.log(closeLakes);
                closeLakes = closeLakes.sort(function (a, b) { return (a.distance - b.distance) });
                // loop through closeLakes and build the template for the page
                closeLakes.forEach(function (lake) {
                    lakeTemplate += `
                <a href=${lake.href}>
                    <div class="lake-card">
                        <h2>${lake.name}</h2>
                        <p>${lake.distance.toFixed(0)} miles away</p>
                    </div>
                </a>`;
                });
                // append template to page
                $('#lakeContainer').append(lakeTemplate);
            });




            // function to get user's location
            function getLocation(callback) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {
                        callback(position.coords.latitude, position.coords.longitude)
                    }, showError);
                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            }


            // function to define errors for geolocation (ex: user denies location access)
            function showError(error) {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        x.innerHTML = "<p>You've opted out of using location services.</p><a href='/lakes' class='btn btn-success'>View All Lakes</a>"
                        break;
                    case error.POSITION_UNAVAILABLE:
                        x.innerHTML = "Location information is unavailable."
                        break;
                    case error.TIMEOUT:
                        x.innerHTML = "The request to get user location timed out."
                        break;
                    case error.UNKNOWN_ERROR:
                        x.innerHTML = "An unknown error occurred."
                        break;
                }
            }
        });

        // function to calculate distance between two locations
        // https://www.geodatasource.com/developers/javascript
        // unit = the unit you desire for results
        // where: 'M' is statute miles (default)
        // 'K' is kilometers
        // 'N' is nautical miles
        function distance(lat1, lon1, lat2, lon2, unit) {
            if ((lat1 == lat2) && (lon1 == lon2)) {
                return 0;
            }
            else {
                var radlat1 = Math.PI * lat1 / 180;
                var radlat2 = Math.PI * lat2 / 180;
                var theta = lon1 - lon2;
                var radtheta = Math.PI * theta / 180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180 / Math.PI;
                dist = dist * 60 * 1.1515;
                if (unit == "K") { dist = dist * 1.609344 }
                if (unit == "N") { dist = dist * 0.8684 }
                return dist;
            }
        }

    });