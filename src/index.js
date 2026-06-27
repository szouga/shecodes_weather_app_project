//alert("hello world");
function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  //console.log(response.data.temperature.current);
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
function searchCity(city) {
  //make api call and update the interface
  let apiKey = "7e1fbo71a48539tbb0610fa3a35820ef";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  //console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  searchCity(searchInput.value);
}
//let url = "https://jsonplaceholder.typicode.com/users/1";
//axios.get(url).then(searchCity);
let searchFormElement = document.querySelector("#search-form");
//console.log(searchFormElement);
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Paris");
