import React from 'react';

const Header = ({ balance }) => {
  return (
    <header className="bg-indigo-600 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Gestion de Budget</h1>
        <div className="text-lg font-bold">
          Solde: <span className="text-green-300">{balance.toFixed(2)} €</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
