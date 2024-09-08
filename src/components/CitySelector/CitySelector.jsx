import React, { useState } from 'react';
import SearchInput from '../SearchInput/SearchInput';

function CitySelector({ onSelectCity }) {
  const [cities, setCities] = useState([]);

  const handleSearch = async (query) => {
    if (!query) {
      setCities([]); // Ha az input üres, nincs szükség új lekérdezésre
      return;
    }

    try {
      const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${query}`);
      const data = await response.json();
      setCities(data.results || []); // Frissítjük a találatokat
    } catch (error) {
      console.error('Failed to fetch city data:', error);
    }
  };

  return (
    <div className="bg-gray-100 p-4 shadow-md rounded-md w-full font-inter">
      <SearchInput onSearch={handleSearch} />
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
