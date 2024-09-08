// src/helpers/getWeatherIcon.js

// Function to get weather icon URL based on weather code, temperature, and precipitation probability
const getWeatherIcon = (weatherCode, minTemp, pop) => {
  const iconMap = {
      0: "c01d",   // Clear sky
      1: "c02d",   // Few clouds
      2: "c02d",   // Scattered clouds
      3: "c03d",   // Broken clouds
      45: "a05d",  // Fog
      48: "a05d",  // Freezing fog
      51: "d01d",  // Light drizzle
      53: "d02d",  // Drizzle
      55: "d03d",  // Heavy drizzle
      56: "f01d",  // Freezing drizzle
      57: "f01d",  // Dense freezing drizzle
      61: "r01d",  // Light rain
      63: "r02d",  // Moderate rain
      65: "r03d",  // Heavy rain
      66: "f01d",  // Freezing rain
      67: "f01d",  // Dense freezing rain
      71: "s01d",  // Light snow
      73: "s02d",  // Moderate snow
      75: "s03d",  // Heavy snow
      80: "r04d",  // Showers
      81: "r05d",  // Heavy showers
      95: "t04d",  // Thunderstorm
      96: "t04d",  // Thunderstorm with hail
  };

  // Log the weather data to debug
  console.log('WeatherCode:', weatherCode, 'MinTemp:', minTemp, 'POP:', pop);

  // If precipitation probability (POP) is higher than 30%, use rain or snow icon
  if (pop >= 30) {
    if (minTemp < 0) {
      return `https://www.weatherbit.io/static/img/icons/s01d.png`; // Snow icon for below 0°C
    } else {
      return `https://www.weatherbit.io/static/img/icons/r01d.png`; // Rain icon for above 0°C
    }
  }

  // Default icon based on weather code if precipitation probability is low
  const iconCode = iconMap[weatherCode];
  return iconCode
    ? `https://www.weatherbit.io/static/img/icons/${iconCode}.png`
    : `https://www.weatherbit.io/static/img/icons/u00d.png`; // Default icon for unknown codes
};

export default getWeatherIcon;
