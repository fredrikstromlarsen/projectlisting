const body = document.querySelector("body");
const header = document.getElementById("header");
const geolocation = document.getElementById("geolocation");
const timestamp = document.getElementById("timestamp");
const dataContainer = document.getElementById("times");
const compass = ["N", "NN&Oslash;", "N&Oslash;", "&Oslash;N&Oslash;", "&Oslash;", "&Oslash;S&Oslash;",
    "S&Oslash;", "SS&Oslash;", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"
];
var n = 50;
var c = 27;
var b = Math.round(Math.random() * c) + 1;

var url;
var positionInfo;

getLocation();

function getLocation() {
    navigator.geolocation.getCurrentPosition(function (position) {
        geolocation.innerHTML = "Locating...";
        timestamp.innerHTML = "Checking...";

        var d = new Date(position.timestamp);
        var month = Number(d.getMonth() + 1);
        var date = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();

        if (month < 10) {
            var month = "0" + Number(d.getMonth() + 1);
        }
        if (date < 10) {
            var date = "0" + d.getDate();
        }
        if (hour < 10) {
            var hour = "0" + d.getHours();
        }
        if (minute < 10) {
            var minute = "0" + d.getMinutes();
        }

        positionInfo = {
            "lat": position.coords.latitude,
            "lon": position.coords.longitude,
            "acc": position.coords.accuracy,
            "timestamp": hour + ":" + minute + ", " + date + "/" + month
        };

        let url = "https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=" + positionInfo.lat +
            "&lon=" + positionInfo.lon;
        var updateTimestamp = positionInfo.timestamp;

        findCity();
        getData(url);

        function findCity() {
            fetch('https://geocode.xyz/' + positionInfo.lat + ',' + positionInfo.lon + '?json=1').then(
                function (response) {
                    return response.json();
                }).then(function (data) {
                if (data.region) {
                    geolocation.innerHTML = data.region;
                    timestamp.innerHTML = "Last Update: " + updateTimestamp;
                } else {
                    setTimeout(findCity(), 2000);
                }
            })
        }

        async function getData() {
            let wObj = await fetch(url, {
                "mode": "cors",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "User-Agent": "WeatherApp/0.2 qdfibtlbl@relay.firefox.com"
            });
            let wPlaintext = await wObj.text();
            let wData = JSON.parse(wPlaintext);

            if (!document.getElementById("w2t")) {
                addRows(n);

                function addRows(n) {
                    for (i = 2; i <= n - 1; i++) {
                        dataContainer.innerHTML += '<div class="row"><div class="cell" id="w' + i +
                            'ts"></div><div class="cell" id="w' + i +
                            't"></div><div class="cell" id="w' + i +
                            'ws"></div><div class="cell" id="w' + i +
                            'wd"></div><div class="cell" id="w' + i +
                            'h"></div><div class="cell" id="w' + i +
                            'caf"></div><div class="cell" id="w' + i + 'pa"></div></div>';
                    }
                }
            }
            setTimeout(function () {
                for (i = 2; i <= n; i++) {
                    document.getElementById("w" + i + "pa").innerHTML = wData.properties
                        .timeseries[i]
                        .data.next_1_hours.details.precipitation_amount + " mm";
                    document.getElementById("w" + i + "caf").innerHTML = wData.properties
                        .timeseries[i]
                        .data.instant.details.cloud_area_fraction + "%";
                    document.getElementById("w" + i + "h").innerHTML = wData.properties
                        .timeseries[i]
                        .data.instant.details.relative_humidity + "%";
                    document.getElementById("w" + i + "wd").innerHTML = compass[Math.round((
                            wData
                            .properties.timeseries[i].data.instant.details
                            .wind_from_direction /
                            22.5) + 0.5) - 1] + " / " + wData.properties.timeseries[i].data
                        .instant
                        .details.wind_from_direction + "&#176;";
                    document.getElementById("w" + i + "ws").innerHTML = wData.properties
                        .timeseries[i]
                        .data.instant.details.wind_speed + " m/s";
                    document.getElementById("w" + i + "t").innerHTML = wData.properties
                        .timeseries[i]
                        .data.instant.details.air_temperature + " C&#176;";

                    let wtsm = wData.properties.timeseries[i].time.slice(5, -13);
                    let wtsd = wData.properties.timeseries[i].time.slice(8, -10);
                    let wtst = wData.properties.timeseries[i].time.slice(11, -4);
                    document.getElementById("w" + i + "ts").innerHTML = wtst + ", " + wtsd +
                        "/" + wtsm;
                }
            }, 20);
        }
    })
}
window.onload = function () {
    body.style.background = "url(img/original/" + b + ".jpg), url(img/64px/" +
        b + ".jpg)";
    body.style.height = Number(n * 3.3 * 16) + "px";

}