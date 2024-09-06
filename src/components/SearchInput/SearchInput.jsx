import React, { useState, useEffect } from 'react';

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
 
    if (query.trim() === '') {
      onSearch('');
      return;
    }

    // Debouncing
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(delayDebounceFn); 
  }, [query, onSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Enter city name"
      className="p-2 border border-gray-300 rounded w-full mb-4 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
      style={{ fontSize: '12px', lineHeight: '14.52px' }}
    />
  );
}

export default SearchInput;
