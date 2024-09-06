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

  const handleCityClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div 
      className="App grid grid-cols-12 min-h-screen"
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #7CB9E8 0%, #A3D4FA 100%)', // Teljes képernyős háttér
      }}
    >
      {/* Középre igazítva a "Please select a city!" */}
      <div className="col-span-12 flex items-center justify-center" style={{ minHeight: '90vh' }}>
        {!selectedCity ? (
          <div 
            className="text-center p-4 bg-gray-100 text-gray-900 rounded-md hover:bg-gray-200 transition-all duration-300 cursor-pointer"
            onClick={handleCityClick}  // Kattintás esemény a modal megnyitására
          >
            <p className="text-lg md:text-xl font-semibold">Please select a city!</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <SelectedCity city={selectedCity} onCityClick={handleCityClick} />
            <CurrentWeather city={selectedCity} />
          </div>
        )}
      </div>

      {/* Alsó rész: "Jelentkező neve" */}
      <div 
        className="col-span-12 md:col-span-4 flex items-center justify-center md:justify-end p-4"
        style={{
          paddingRight: '30px',
        }}
      >
        <footer 
          className="py-4 text-center md:text-right"
          style={{
            fontFamily: 'Inter',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '14.52px',
            opacity: 1,  
          }}
        >
          <p className="text-white">Jelentkező neve</p>
        </footer>
      </div>

      {/* Modal for City Selection */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CitySelector onSelectCity={handleCitySelect} />
      </Modal>
    </div>
  );
}

export default App;
