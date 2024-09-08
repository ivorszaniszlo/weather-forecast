import React, { useEffect, useState } from 'react';
import classNames from 'classnames'; // Optional, if you want to simplify conditional class handling

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Azonnali visszatérés, ha nincs nyitva

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-500 ease-out">
      <div
        className={classNames(
          "bg-white p-6 rounded-md shadow-lg w-full max-w-lg relative transform transition-transform duration-500 ease-out",
          { 'scale-100 opacity-100': isOpen, 'scale-75 opacity-0': !isOpen }
        )}
      >
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
