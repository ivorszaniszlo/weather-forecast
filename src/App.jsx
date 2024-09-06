import React, { useState, useEffect } from 'react';
import Layout from './components/Layout/Layout';
import CitySelector from './components/CitySelector/CitySelector';
import Modal from './components/Modal/Modal';
import SelectedCity from './components/SelectedCity/SelectedCity';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

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
          <p className="text-lg md:text-xl font-semibold">Please select a city!</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <SelectedCity city={selectedCity} onCityClick={handleCityClick} />
          <CurrentWeather city={selectedCity} />
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CitySelector onSelectCity={handleCitySelect} />
      </Modal>
    </Layout>
  );
}

export default App;
