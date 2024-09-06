import React, { useState } from 'react';

function CitySelector({ onSelectCity }) {
  const [query, setQuery] = useState('');
  const [cities, setCities] = useState([]);

  const searchCities = async () => {
    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`);
      const data = await response.json();
      setCities(data.results || []);
    } catch (error) {
      console.error('Failed to fetch city data:', error);
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md w-full md:w-3/4 lg:w-1/2 mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name"
        className="p-2 border border-gray-300 rounded w-full mb-4"
      />
      <button onClick={searchCities} className="p-2 bg-blue-500 text-white rounded w-full md:w-auto">
        Search
      </button>
      <ul className="mt-4">
        {cities.map(city => (
          <li
            key={city.id}
            onClick={() => onSelectCity(city)}
            className="cursor-pointer hover:bg-gray-100 p-2 border-b"
          >
            {city.name}, {city.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitySelector;

