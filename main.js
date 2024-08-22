let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
  let city = document.getElementById("city-input").value;
  let keyApi = "6c8063d7d9931bd34246ad94ff95b07d";
  let fetchedApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keyApi}&units=metric`;

  fetch(fetchedApi)
    .then((response) => response.json())
    .then((data) => {
      let dataResult = document.getElementById("weather-result");
      if (data.cod === "404") {
        dataResult.innerText = data.message;
      } else {
        dataResult.innerHTML = `<h3>${data.name}</h3>
        <p>temprture : ${data.main.temp}*C</p>
        <p>temprture_max : ${data.main.temp_max}*C</p>
        <p>temprture_min : ${data.main.temp_min}*C</p>
        <p>weather-description : ${data.weather[0].description}</p>
        <p>wind.speed : ${data.wind.speed}</p>`;
      }
    })
    .finally(console.log("plese try again"));
});
