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
    <div className="bg-gray-100 p-4 shadow-md rounded-md w-full font-inter">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter city name"
        className="p-2 border border-gray-300 rounded w-full mb-4 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
        style={{ fontSize: '12px', lineHeight: '14.52px' }}
      />
      <button
        onClick={searchCities}
        className="p-2 bg-blue-600 text-white rounded w-full hover:bg-blue-700 focus:bg-blue-800 transition-colors duration-300"
        style={{ fontSize: '12px', lineHeight: '14.52px' }}
      >
        Search
      </button>
      <ul className="mt-4">
        {cities.map((city) => (
          <li
            key={city.id}
            onClick={() => onSelectCity(city)}
            className="cursor-pointer hover:bg-blue-100 p-2 border-b text-gray-800 transition-colors duration-300"
            style={{ fontSize: '12px', lineHeight: '14.52px' }}
          >
            {city.name}, {city.country}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitySelector;
