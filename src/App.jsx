import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import CitySelector from './components/CitySelector/CitySelector';
import Modal from './components/Modal/Modal';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedCity = localStorage.getItem('selectedCity');
    if (storedCity) {
      setSelectedCity(JSON.parse(storedCity));
    } else {
      setIsModalOpen(true); // Automatically open modal if no city is selected
    }
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    localStorage.setItem('selectedCity', JSON.stringify(city));
    setIsModalOpen(false);
  };

  const handleCityClick = () => {
    setIsModalOpen(true); // Open modal on city name click
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
        <div className="flex flex-col items-center">
          <CurrentWeather city={selectedCity} onCityClick={handleCityClick} />
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CitySelector onSelectCity={handleCitySelect} />
      </Modal>
    </Layout>
  );
}

export default App;
