import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className="Layout flex flex-col h-screen w-screen bg-gradient-to-b from-blue-300 to-blue-200 overflow-x-hidden"
    >
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center md:justify-end p-4 pr-8">
        <footer className="py-4 text-center md:text-right text-white text-xs leading-[14.52px] font-inter">
          <p>Ivor Szaniszló</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
