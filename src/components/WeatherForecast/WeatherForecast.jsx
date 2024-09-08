import React, { useEffect, useState } from 'react';
import getWeatherIcon from '../../helpers/getWeatherIcon';

const WeatherForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeatherForecast(city.latitude, city.longitude);
    }
  }, [city]);

  const fetchWeatherForecast = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_min,temperature_2m_max,precipitation_sum,weathercode&timezone=Europe/Budapest`
      );
      const data = await response.json();
      setForecastData(data.daily);
    } catch (error) {
      console.error("Error fetching forecast data:", error);
    }
  };

  if (!forecastData) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="forecast-container grid grid-cols-3 gap-y-2 gap-x-4 md:gap-y-1 md:gap-x-12"> {/* Szélesebb oszlopok */}
      <p className="col-span-3 text-left text-sm font-inter font-normal mb-4">7 napos előrejelzés</p>

      {forecastData.time.map((day, index) => (
        <div key={index} className="flex justify-between items-center col-span-3 mb-2 md:mb-1"> {/* Kisebb sortáv desktopon */}
          {/* Nap neve */}
          <div className="w-1/3 text-left">
            <p>{new Date(day).toLocaleDateString('hu-HU', { weekday: 'long' })}</p>
          </div>

          {/* Csapadék ikon és százalék */}
          <div className="w-1/3 flex items-center">
            <img
              src={getWeatherIcon(forecastData.weathercode[index], forecastData.temperature_2m_min[index], forecastData.precipitation_sum[index])}
              alt="Weather Icon"
              className="w-6 h-6 mr-2 weather-icon"
            />
            <p>{Math.round(forecastData.precipitation_sum[index])}%</p>
          </div>

          {/* Min és Max hőmérséklet oszlopok egy sorban */}
          <div className="w-1/3 text-right">
            <p className="temperature">{forecastData.temperature_2m_min[index]}°C / {forecastData.temperature_2m_max[index]}°C</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherForecast;
