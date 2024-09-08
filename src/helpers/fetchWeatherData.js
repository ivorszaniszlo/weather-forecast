export const fetchWeatherData = async (latitude, longitude) => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    return await response.json();
  };
  