import React from 'react';
import NetflixLogo from "../assets/Netflix.png";

const NetflixPage = () => {
  // Array com os links encurtados
  const links = [
    { id: 1, label: "Acesse sua conta Netflix", url: "https://encurtador.com/netflix" },
    { id: 2, label: "Link 2", url: "https://encurtador.com/link2" },
    { id: 3, label: "Link 3", url: "https://encurtador.com/link3" },
    // Adicione mais links conforme necessário
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        {/* Ajustando a imagem para não ficar distorcida */}
        <img 
          src={NetflixLogo} 
          alt="Netflix Logo" 
          className="w-40 h-40 mb-6 mx-auto object-contain" 
        />
        <h2 className="text-3xl font-extrabold text-center text-red-600 mb-6">
          Desbloqueie Sua Experiência Netflix Agora!
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Aproveite os links abaixo para acessar diretamente sua conta Netflix e outras ofertas especiais!
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

export default NetflixPage;
