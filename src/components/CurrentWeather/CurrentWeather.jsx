import React, { useEffect, useState } from 'react';

const CurrentWeather = ({ city, onCityClick }) => {
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data when the city changes
  useEffect(() => {
    if (city) {
      fetchWeatherData(city.latitude, city.longitude);
    }
  }, [city]);

  // Function to fetch weather data from Open Meteo API
  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const data = await response.json();
      setWeatherData(data.current_weather);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Show loading text while waiting for the weather data
  if (!weatherData) {
    return <div>Loading weather...</div>;
  }

  return (
    <div className="current-weather-container">
      {/* The city name is clickable and opens the modal */}
      <p className="city-name cursor-pointer" onClick={onCityClick}>
        {city.name}
      </p>
      {/* Display the current temperature */}
      <h1 className="temperature">{weatherData.temperature} °C</h1>
      {/* Display the weather description based on the weather code */}
      <p className="weather-description">{getWeatherDescription(weatherData.weathercode)}</p>
    </div>
  );
};

// Mapping weather codes to Hungarian weather descriptions
const getWeatherDescription = (weatherCode) => {
  const weatherDescriptions = {
    0: "Tiszta égbolt",
    1: "Főként tiszta",
    2: "Részben felhős",
    3: "Borult",
    45: "Köd",
    48: "Ködös, zúzmarás",
    51: "Szitálás: Enyhe intenzitás",
    53: "Szitálás: Mérsékelt intenzitás",
    55: "Szitálás: Sűrű",
    56: "Fagyos szitálás: Enyhe intenzitás",
    57: "Fagyos szitálás: Sűrű",
    61: "Eső: Gyenge",
    63: "Eső: Mérsékelt",
    65: "Eső: Erős intenzitás",
    66: "Fagyos eső: Enyhe intenzitás",
    67: "Fagyos eső: Erős intenzitás",
    71: "Havazás: Enyhe",
    73: "Havazás: Mérsékelt",
    75: "Havazás: Erős intenzitás",
    77: "Hózápor",
    80: "Zápor: Enyhe",
    81: "Zápor: Mérsékelt",
    82: "Zápor: Heves",
    85: "Hózápor: Enyhe",
    86: "Hózápor: Erős",
    95: "Zivatar: Enyhe vagy mérsékelt",
    96: "Zivatar enyhe jégesővel",
    99: "Zivatar erős jégesővel",
  };

  return weatherDescriptions[weatherCode] || "Ismeretlen időjárás";
};

export default CurrentWeather;
