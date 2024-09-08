import React, { useEffect, useState } from 'react';
import { getWeatherDescription } from '../../helpers/getWeatherDescription'; // Import helper function
import { fetchWeatherData } from '../../helpers/fetchWeatherData'; // Fetch helper

const CurrentWeather = ({ city, onCityClick }) => {
  const [weatherData, setWeatherData] = useState(null);

  // Fetch weather data when the city changes
  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const data = await fetchWeatherData(city.latitude, city.longitude);
        setWeatherData(data.current_weather);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [city]);

  // Show loading text while waiting for the weather data
  if (!weatherData) {
    return <div>Loading weather...</div>;
  }

  return (
    <div className="current-weather-container pt-8 flex flex-col items-start">
      {/* Tooltip wrapper for city name */}
      <div className="relative group w-full flex flex-col items-start">
        {/* The city name is clickable and opens the modal */}
        <p className="city-name cursor-pointer items-baseline" onClick={onCityClick}>
          {city.name}
        </p>

        {/* Tooltip that appears on hover */}
        <div className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded-md py-1 px-2 whitespace-pre-wrap text-left w-max max-w-xs">
          Válassz települést!
        </div>
      </div>

      {/* Display the current temperature */}
      <h2 className="temperature flex flex-col items-start mt-2">{weatherData.temperature} °C</h2>
      
      {/* Display the weather description based on the weather code */}
      <p className="weather-description flex flex-col items-start mt-1">
        {getWeatherDescription(weatherData.weathercode)}
      </p>
    </div>
  );
};

export default CurrentWeather;
