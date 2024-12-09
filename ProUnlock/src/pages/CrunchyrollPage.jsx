import React from 'react';
import CrunchyrollLogo from "../assets/Cruchyroll.png";

const CrunchyrollPage = () => {

  const links = [
    { id: 1, label: "Acesse sua conta Crunchyroll", url: "https://encurtador.com/crunchyroll" },
    { id: 2, label: "Link 2", url: "https://encurtador.com/link2" },
    { id: 3, label: "Link 3", url: "https://encurtador.com/link3" },

  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8 min-h-screen">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <img src={CrunchyrollLogo} alt="Logo Crunchyroll - Acesso Exclusivo" className="w-32 h-32 mb-4 mx-auto" />
        <h2 className="text-3xl font-extrabold text-center text-yellow-600 mb-6">
          Acesso Exclusivo ao Crunchyroll - Não Perca!
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Aproveite os links abaixo para acessar sua conta Crunchyroll e mais conteúdos incríveis!
        </p>
        
        <div className="space-y-2">
          {links.map(link => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-blue-500 underline transition-colors hover:text-blue-700 text-xl"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrunchyrollPage;
