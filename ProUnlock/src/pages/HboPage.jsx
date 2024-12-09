import React from 'react';
import HBOLogo from "../assets/HBO.png";

const HBOPage = () => {
  // Array com os links encurtados
  const links = [
    { id: 1, label: "Acesse sua conta HBO", url: "https://encurtador.com/hbo" },
    { id: 2, label: "Link 2", url: "https://encurtador.com/link2" },
    { id: 3, label: "Link 3", url: "https://encurtador.com/link3" },
    // Adicione mais links conforme necessário
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <img src={HBOLogo} alt="HBO Logo" className="w-64 h-64 mb-4 mx-auto" />
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Acesso Exclusivo ao HBO - Não Perca!
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Aproveite os links abaixo para acessar sua conta HBO e mais conteúdos incríveis!
        </p>
        
        {/* Mapeando o array de links */}
        {links.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-blue-500 underline transition-colors hover:text-blue-700 mb-2 text-xl"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HBOPage;
