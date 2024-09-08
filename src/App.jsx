import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import CitySelector from './components/CitySelector/CitySelector';
import Modal from './components/Modal/Modal';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';
import { getStoredCity, setStoredCity } from './helpers/storageHelper'; // Import helper functions

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const city = getStoredCity();
    if (city) {
      setSelectedCity(city);
    } else {
      setIsModalOpen(true);
    }
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setStoredCity(city);
    setIsModalOpen(false);
  };

  const handleCityClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {selectedCity ? (
        <div className="flex flex-col md:flex-row md:justify-between md:gap-16">
          {/* Current weather section */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <CurrentWeather city={selectedCity} onCityClick={handleCityClick} />
          </div>

          {/* Weather forecast section */}
          <div className="flex flex-col items-center w-full md:w-2/3">
            <WeatherForecast city={selectedCity} />
          </div>
        </div>
      ) : (
        <div
          className="text-center p-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
          onClick={handleCityClick}
        >
          <p className="text-lg md:text-xl font-semibold">Válassz egy települést!</p>
        </div>
      )}

      {/* Modal for city selection */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CitySelector onSelectCity={handleCitySelect} />
      </Modal>
    </Layout>
  );
}

export default App;
