function changeCity() {
  switch (document.getElementById("choice").value) {
    case "moscow":
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=55.44&lon=37.36&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((weather) => {
          document.getElementById("latitude").innerHTML =
            "Широта: " + weather.coord.lat;
          document.getElementById("longitude").innerHTML =
            "Долгота: " + weather.coord.lon;
          document.getElementById("temperature").innerText =
            "Температура: " + Math.round(weather.main.temp - 273) + " C";
          document.getElementById("pressure").innerText =
            "Давление: " +
            Math.round(weather.main.pressure / 1.333) +
            " мм.рт.ст";
        });
      fetch(
        "https://api.openweathermap.org/data/2.5/air_pollution?lat=55.44&lon=37.36&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((pollution) => {
          console.log(pollution);
          document.getElementById("co").innerHTML =
            "CO: " + pollution.list[0].components.co + " μg/m3";
          document.getElementById("no").innerHTML =
            "NO: " + pollution.list[0].components.no + " μg/m3";
          document.getElementById("no2").innerText =
            "NO2: " + pollution.list[0].components.no2 + " μg/m3";
          document.getElementById("so2").innerText =
            "SO2: " + pollution.list[0].components.so2 + " μg/m3";
        });
      break;
    case "piter":
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=59.57&lon=30.19&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((weather) => {
          document.getElementById("latitude").innerHTML =
            "Широта: " + weather.coord.lat;
          document.getElementById("longitude").innerHTML =
            "Долгота: " + weather.coord.lon;
          document.getElementById("temperature").innerText =
            "Температура: " + Math.round(weather.main.temp - 273) + " C";
          document.getElementById("pressure").innerText =
            "Давление: " +
            Math.round(weather.main.pressure / 1.333) +
            " мм.рт.ст";
        });
      fetch(
        "https://api.openweathermap.org/data/2.5/air_pollution?lat=59.57&lon=30.19&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((pollution) => {
          console.log(pollution);
          document.getElementById("co").innerHTML =
            "CO: " + pollution.list[0].components.co + " μg/m3";
          document.getElementById("no").innerHTML =
            "NO: " + pollution.list[0].components.no + " μg/m3";
          document.getElementById("no2").innerText =
            "NO2: " + pollution.list[0].components.no2 + " μg/m3";
          document.getElementById("so2").innerText =
            "SO2: " + pollution.list[0].components.so2 + " μg/m3";
        });
      break;
    case "murmansk":
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=68.58&lon=33.05&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((weather) => {
          document.getElementById("latitude").innerHTML =
            "Широта: " + weather.coord.lat;
          document.getElementById("longitude").innerHTML =
            "Долгота: " + weather.coord.lon;
          document.getElementById("temperature").innerText =
            "Температура: " + Math.round(weather.main.temp - 273) + " C";
          document.getElementById("pressure").innerText =
            "Давление: " +
            Math.round(weather.main.pressure / 1.333) +
            " мм.рт.ст";
        });
      fetch(
        "https://api.openweathermap.org/data/2.5/air_pollution?lat=68.58&lon=33.05&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((pollution) => {
          console.log(pollution);
          document.getElementById("co").innerHTML =
            "CO: " + pollution.list[0].components.co + " μg/m3";
          document.getElementById("no").innerHTML =
            "NO: " + pollution.list[0].components.no + " μg/m3";
          document.getElementById("no2").innerText =
            "NO2: " + pollution.list[0].components.no2 + " μg/m3";
          document.getElementById("so2").innerText =
            "SO2: " + pollution.list[0].components.so2 + " μg/m3";
        });
      break;
    case "novosibirsk":
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=55.02&lon=82.56&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((weather) => {
          document.getElementById("latitude").innerHTML =
            "Широта: " + weather.coord.lat;
          document.getElementById("longitude").innerHTML =
            "Долгота: " + weather.coord.lon;
          document.getElementById("temperature").innerText =
            "Температура: " + Math.round(weather.main.temp - 273) + " C";
          document.getElementById("pressure").innerText =
            "Давление: " +
            Math.round(weather.main.pressure / 1.333) +
            " мм.рт.ст";
        });
      fetch(
        "https://api.openweathermap.org/data/2.5/air_pollution?lat=55.02&lon=82.56&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((pollution) => {
          console.log(pollution);
          document.getElementById("co").innerHTML =
            "CO: " + pollution.list[0].components.co + " μg/m3";
          document.getElementById("no").innerHTML =
            "NO: " + pollution.list[0].components.no + " μg/m3";
          document.getElementById("no2").innerText =
            "NO2: " + pollution.list[0].components.no2 + " μg/m3";
          document.getElementById("so2").innerText =
            "SO2: " + pollution.list[0].components.so2 + " μg/m3";
        });
      break;
    case "voronezh":
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=51.40&lon=39.11&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((weather) => {
          document.getElementById("latitude").innerHTML =
            "Широта: " + weather.coord.lat;
          document.getElementById("longitude").innerHTML =
            "Долгота: " + weather.coord.lon;
          document.getElementById("temperature").innerText =
            "Температура: " + Math.round(weather.main.temp - 273) + " C";
          document.getElementById("pressure").innerText =
            "Давление: " +
            Math.round(weather.main.pressure / 1.333) +
            " мм.рт.ст";
        });
      fetch(
        "https://api.openweathermap.org/data/2.5/air_pollution?lat=51.40&lon=39.11&appid=627cf8a1454b6eb1a2023bc5580b2107"
      )
        .then((response) => response.json())
        .then((pollution) => {
          console.log(pollution);
          document.getElementById("co").innerHTML =
            "CO: " + pollution.list[0].components.co + " μg/m3";
          document.getElementById("no").innerHTML =
            "NO: " + pollution.list[0].components.no + " μg/m3";
          document.getElementById("no2").innerText =
            "NO2: " + pollution.list[0].components.no2 + " μg/m3";
          document.getElementById("so2").innerText =
            "SO2: " + pollution.list[0].components.so2 + " μg/m3";
        });
      break;
  }
}
