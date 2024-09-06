import React, { useEffect, useState } from 'react';

const CurrentWeather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeatherData(city.latitude, city.longitude);
    }
  }, [city]);

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

  if (!weatherData) {
    return <div>Loading weather...</div>;
  }

  return (
    <div className="current-weather-container">
      {/* Város neve */}
      <p className="city-name">{city.name}</p>

      {/* Hőmérséklet adatok */}
      <h1 className="temperature">{weatherData.temperature} °C</h1>

      {/* Időjárás kód */}
      <p className="weather-description">{getWeatherDescription(weatherData.weathercode)}</p>
    </div>
  );
};

// Magyar fordítás az időjárás kódokhoz
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
