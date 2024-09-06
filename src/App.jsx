import React, { useState, useEffect } from 'react';
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

  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center font-inter">
      <header className="w-full bg-blue-500 p-4 text-white text-center shadow-md">
        <h1 className="text-2xl md:text-4xl font-bold">Weather Forecast</h1>
      </header>
      <main className="flex-1 w-full max-w-4xl p-6">
        <SelectedCity city={selectedCity} onCityClick={() => setIsModalOpen(true)} />
        {selectedCity && <CurrentWeather city={selectedCity} />}
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CitySelector onSelectCity={handleCitySelect} />
      </Modal>
      <footer className="w-full bg-blue-500 py-4 text-center text-white">
        Powered by Open Meteo
      </footer>
    </div>
  );
}

export default App;
