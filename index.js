const input = document.querySelector("input");
const btn = document.querySelector("button");
btn.addEventListener("click", searchLocation);

async function fetchWeather(location) {
  const data = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=3959cc39ade247bfbf3174422232210&q=${location}&aqi=no`,
    { mode: "cors" }
  );
  const jsonData = await data.json();
  return jsonData;
}

function displayData(data) {
  const location = document.getElementById("location");
  const condition = document.getElementById("condition");
  const temp = document.getElementById("temp");
  const feelsLike = document.getElementById("feels-like");
  const humidity = document.getElementById("humidity");
  const windKph = document.getElementById("wind-kph");

  location.textContent = `${data.location.country}, ${data.location.name}`;
  condition.textContent = `${data.current.condition.text}`;
  temp.textContent = `${data.current.temp_c}°C`;
  feelsLike.textContent = `Feels like: ${data.current.feelslike_c}°C`;
  humidity.textContent = `Humidity: ${data.current.humidity}%`;
  windKph.textContent = `Wind: ${data.current.wind_mph} mph`;

  console.log(data);
}

function searchLocation(e) {
  e.preventDefault();
  console.log(input.value);
  fetchWeather(input.value)
    .then(displayData)
    .catch((error) => {
      console.log(error);
    });
}

fetchWeather("Berlin")
  .then(displayData)
  .catch((error) => {
    console.log(error);
  });
