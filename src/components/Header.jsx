import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold opacity-80">Artigence Healthcare Systems</h1>

      <h3 className="text-sm opacity-80">
        {new Date().toDateString()} {new Date().toLocaleTimeString()}
      </h3>
    </header>
  );
};

export default Header;
