const url = "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2391279"

fetch(url)
.then(response => response.json())
.then(data => displayWeather(data.consolidated_weather))
.catch(console.error)

function displayWeather(weather){
    var name = document.querySelector('.result')
    console.log(name)
    for (let index = 0; index < weather.length; index++) {
        var item = document.createElement('li')
        item.textContent = weather[index].weather_state_name
        name.appendChild(item)
    }
}
