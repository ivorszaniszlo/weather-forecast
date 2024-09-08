import React from 'react';

const Layout = ({ children }) => {
  return (
    <div
      className="Layout flex flex-col min-h-screen"
      style={{
        width: '100vw',
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #7CB9E8 0%, #A3D4FA 100%)',
      }}
    >
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center" style={{ minHeight: '90vh' }}>
        {children}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-center md:justify-end p-4"
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
          <p className="text-white">Ivor Szaniszló</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
