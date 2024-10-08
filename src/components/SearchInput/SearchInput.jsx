import React, { useState, useEffect } from 'react';

function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Ha az input üres, akkor nem futtatjuk a keresést
    if (query.trim() === '') {
      onSearch(''); // Eltávolítjuk a városlistát
      return;
    }

    // Debounce logika beállítása
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 500); // 500ms késleltetést adunk a lekérdezésre

    // Tisztítjuk a timeout-ot a cleanup fázisban, hogy elkerüljük a felesleges lekérdezéseket
    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Település neve"
      className="p-2 border border-gray-300 rounded w-full mb-4 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all duration-300"
      style={{ fontSize: '12px', lineHeight: '14.52px' }}
    />
  );
}

export default SearchInput;
