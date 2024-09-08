// Helper functions for localStorage interactions
export const getStoredCity = () => {
    const storedCity = localStorage.getItem('selectedCity');
    return storedCity ? JSON.parse(storedCity) : null;
  };
  
  export const setStoredCity = (city) => {
    localStorage.setItem('selectedCity', JSON.stringify(city));
  };
  