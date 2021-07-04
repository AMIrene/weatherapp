
//Hide current weather at start


//

//weather data from current weather data api
let weather = {
    "apiKey": "f899a5fad6288f546bec1ed402c6fa37",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey

            // + city
            // + "&units=metric&appid="
            // + this.apiKey
        ).then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { icon } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, temp, humidity, speed)

        document.querySelector("#city").innerText = name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".currentTemp").innerText = "Temp: " + temp + "°c";
        document.querySelector(".currentWind").innerText = "Wind: " + speed + " KM/H";
        document.querySelector(".currentHumidity").innerText = "Humidity: " + humidity + "%";


    }


};

//search function
const searchCity = document.querySelector(".search-btn");
const cityInput = document.getElementById('city-input');
const currentWeatherContainer = document.querySelector(".current-box");

cityInput.addEventListener('change', function (event) {
    event.preventDefault();

    const userInput = event.target.value;
   
   
    searchCity.addEventListener('click', function (event) {
        event.preventDefault();
        currentWeatherContainer.classList.remove('hide');
        weather.fetchWeather(userInput)
    })
})


