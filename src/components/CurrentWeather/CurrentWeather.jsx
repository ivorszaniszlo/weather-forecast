import React, { useEffect, useState } from 'react';

function CurrentWeather({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current_weather=true`);
        const data = await response.json();
        setWeatherData(data.current_weather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (!weatherData) return <p>Loading weather data...</p>;

  return (
    <div className="bg-white p-4 rounded-md shadow-md text-center">
      <h2 className="text-lg font-semibold">Current Weather in {city.name}</h2>
      <p className="text-2xl font-bold">{weatherData.temperature}°C</p>
      <p>{weatherData.weathercode === 0 ? "Clear Sky" : "Other Weather Condition"}</p>
    </div>
  );
}

export default CurrentWeather;
