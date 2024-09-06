import React, { useEffect, useState } from 'react';

function Modal({ isOpen, onClose, children }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 100);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`bg-white p-6 rounded-md shadow-lg w-full max-w-lg relative transform transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-75'}`}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900 rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        >
          <span className="text-xl">×</span>
        </button>
        <div className="font-inter text-gray-900">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
