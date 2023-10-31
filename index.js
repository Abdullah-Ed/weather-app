async function fetchWeather() {
  try {
    const data = await fetch(
      "http://api.weatherapi.com/v1/current.json?key=3959cc39ade247bfbf3174422232210&q=Dresden&aqi=no",
      { mode: "cors" }
    );
    const jsonData = await data.json();
    return jsonData;
  } catch (error) {
    throw new Error("Error fetching weather data: " + error.message);
  }
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
  console.log(data.location.country);
  console.log(data.location.name);
  console.log(data.current.condition.text);
  console.log(data.current.temp_c);
  console.log(data.current.feelslike_c);
  console.log(data.current.humidity);
  console.log(data.current.mph);
}

fetchWeather()
  .then(displayData)
  .catch((error) => {
    console.error(error);
  });
