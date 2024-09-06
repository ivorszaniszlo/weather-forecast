import React from 'react';

function SelectedCity({ city, onCityClick }) {
  return (
    <div 
      className="cursor-pointer p-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-all duration-300"
      onClick={onCityClick}
    >
      {city ? (
        <p className="text-lg md:text-xl font-semibold">{city.name}</p>
      ) : (
        <p className="text-lg md:text-xl font-semibold">Válassz ki egy települést!</p>
      )}
    </div>
  );
}

export default SelectedCity;
