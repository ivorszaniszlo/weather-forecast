import React, { useEffect, useState, useCallback } from 'react';
import getWeatherIcon from '../../helpers/getWeatherIcon';
import TemperatureChart from '../TemperatureChart/TemperatureChart';

const WeatherForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState(null);

  const fetchWeatherForecast = useCallback(async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_min,temperature_2m_max,precipitation_sum,weathercode&timezone=Europe/Budapest`
      );
      const data = await response.json();
      setForecastData(data.daily);
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  }, []);

  useEffect(() => {
    if (city) {
      fetchWeatherForecast(city.latitude, city.longitude);
    }
  }, [city, fetchWeatherForecast]);

  if (!forecastData) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="forecast-container">
      <p className="col-span-3 text-left text-sm font-inter font-normal mb-4 pt-8">7 napos előrejelzés</p>

      {forecastData.time.map((day, index) => (
        <ForecastDay
          key={index}
          day={day}
          weatherCode={forecastData.weathercode[index]}
          minTemp={forecastData.temperature_2m_min[index]}
          maxTemp={forecastData.temperature_2m_max[index]}
          precipitation={Math.round(forecastData.precipitation_sum[index])} // Round precipitation value
        />
      ))}

      {/* Temperature chart added here */}
      <div className="col-span-3 mt-8">
        <TemperatureChart
          city={city}
          maxTemperatures={forecastData.temperature_2m_max} // Pass the maximum temperatures for the chart
          timeStamps={forecastData.time} // Pass the corresponding timestamps
        />
      </div>
    </div>
  );
};

const ForecastDay = ({ day, weatherCode, minTemp, maxTemp, precipitation }) => {
  return (
    <div className="flex justify-between items-center col-span-2 md:col-span-2 mb-2 md:mb-1 md:gap-x-12">
      <div className="w-1/2 md:w-1/2 text-left">
        <p className="text-lg font-inter">{new Date(day).toLocaleDateString('hu-HU', { weekday: 'long' })}</p>
      </div>

      <div className="w-1/2 md:w-1/2 flex items-center">
        <img
          src={getWeatherIcon(weatherCode, minTemp, precipitation)}
          alt="Weather Icon"
          className="w-6 h-6 weather-icon"
        />
        <p className="ml-2 text-lg">{Math.round(precipitation)}%</p>
      </div>

      <div className="w-1/2 md:w-1/2 text-right">
        <p className="temperature text-lg">{minTemp}°C / {maxTemp}°C</p>
      </div>
    </div>
  );
};

export default WeatherForecast;
