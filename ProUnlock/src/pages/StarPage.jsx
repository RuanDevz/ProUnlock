import React from 'react';
import StarLogo from "../assets/Star.png";

const StarPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <img 
          src={StarLogo} 
          alt="Star+ Logo" 
          className="w-32 h-32 mb-4 mx-auto object-contain" 
        />
        <h2 className="text-2xl font-semibold text-center mb-6">Acesso ao Star+</h2>
        <p className="text-center mb-4">Clique abaixo para acessar sua conta Star+.</p>
        <a
          href="https://encurtador.com/disneyplus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline transition-colors hover:text-blue-700"
        >
          Acesse sua conta Star+
        </a>
      </div>
    </div>
  );
};

export default StarPage;
