import React from 'react';
import AmazonPrimeLogo from "../assets/AmazonPrime.png";

const AmazonPrimePage = () => {
  // Array com os links encurtados
  const links = [
    { id: 1, label: "Acesse sua conta Amazon Prime", url: "https://encurtador.com/amazonprime" },
    { id: 2, label: "Link 2", url: "https://encurtador.com/link2" },
    { id: 3, label: "Link 3", url: "https://encurtador.com/link3" },
    // Adicione mais links conforme necessário
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        {/* Ajustando a imagem para não ficar distorcida */}
        <img 
          src={AmazonPrimeLogo} 
          alt="Amazon Prime Logo" 
          className="w-40 h-40 mb-6 mx-auto object-contain" 
        />
        <h2 className="text-3xl font-extrabold text-center text-yellow-600 mb-6">
          Acesso Exclusivo ao Amazon Prime - Assista Agora!
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Clique nos links abaixo para acessar sua conta Amazon Prime e muito mais!
        </p>
        
        {/* Mapeando o array de links */}
        {links.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-500 underline transition-colors hover:text-blue-700 mb-4 text-xl"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AmazonPrimePage;
