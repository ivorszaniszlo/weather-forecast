import React from 'react';

function SelectedCity({ city, onCityClick }) {
  return (
    <div
      onClick={onCityClick}
      className="cursor-pointer p-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-all duration-300"
    >
      {city ? (
        <p className="text-lg md:text-xl font-semibold">
          Selected City: {city.name}
        </p>
      ) : (
        <p className="text-lg md:text-xl font-semibold">
          Please select a city!
        </p>
      )}
    </div>
  );
}

export default SelectedCity;
