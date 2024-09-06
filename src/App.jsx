import React, { useState } from 'react';
import CitySelector from './components/CitySelector/CitySelector';

function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="App">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-3xl font-bold">Weather Forecast</h1>
      </header>
      <main className="p-6">
        <CitySelector onSelectCity={setSelectedCity} />
        {selectedCity && <p>Selected City: {selectedCity.name}</p>}
      </main>
    </div>
  );
}

export default App;
