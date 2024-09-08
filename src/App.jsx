import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import CitySelector from './components/CitySelector/CitySelector';
import Modal from './components/Modal/Modal';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
      setSelectedCity(JSON.parse(storedCity));
    } else {
      setIsModalOpen(true);
    }
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    localStorage.setItem('selectedCity', JSON.stringify(city));
    setIsModalOpen(false);
  };

  const handleCityClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Layout>
      {!selectedCity ? (
        <div
          className="text-center p-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
          onClick={handleCityClick}
        >
          <p className="text-lg md:text-xl font-semibold">Válassz egy települést!</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row md:justify-between md:gap-16"> {/* Nagyobb oszlopok közötti távolság */}
          {/* Flex item for current weather */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
            <CurrentWeather city={selectedCity} onCityClick={handleCityClick} />
          </div>

          {/* Flex item for weather forecast */}
          <div className="flex flex-col items-center w-full md:w-2/3">
            <WeatherForecast city={selectedCity} />
          </div>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CitySelector onSelectCity={handleCitySelect} />
      </Modal>
    </Layout>
  );
}

export default App;
