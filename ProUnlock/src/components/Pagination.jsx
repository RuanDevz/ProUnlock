import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar hook de navegação
import Netflix from "../assets/Netflix.png";
import HBO from "../assets/HBO.png";
import AmazonPrime from "../assets/AmazonPrime.png";
import Star from "../assets/Star.png";
import crunchyroll from '../assets/Cruchyroll.png'
import Banner from "../assets/Banner.png"; // Banner de fundo

// Serviços com links de acesso
const services = [
  { name: "Netflix", logo: Netflix, route: "/netflix" },
  { name: "HBO", logo: HBO, route: "/hbo" },
  { name: "AmazonPrime", logo: AmazonPrime, route: "/amazonprime" },
  { name: "Star+", logo: Star, route: "/starplus" },
  {name: "Crunchyroll", logo: crunchyroll, route: '/crunchyroll'}
];

const Pagination = () => {
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate(); // Usar hook para navegação

  const handleServiceClick = (service) => {
    // Navegar para a página do serviço
    setSelectedService(service);
    navigate(service.route);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-700 p-8 font-sans">
      <div
        className="flex h-72 w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
      </div>

      <div id="servicos" className="mt-12 w-full max-w-screen-xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-blue-800">
          Serviços de Streaming - Acesso Grátis
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              onClick={() => handleServiceClick(service)}
              className="flex transform cursor-pointer flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg transition-all hover:scale-105 hover:bg-indigo-500 hover:text-white hover:shadow-2xl"
            >
              <img
                src={service.logo}
                alt={`${service.name} logo`}
                className="mb-4 h-24 w-24 transform object-contain transition-transform duration-300 ease-in-out hover:scale-125"
              />
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="mt-12 w-full max-w-md rounded-lg bg-white p-6 text-center shadow-xl">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Acesso para {selectedService.name}
          </h2>
          <a
            href={selectedService.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-blue-500 underline transition-colors hover:text-blue-700"
          >
            Clique aqui para acessar o {selectedService.name}
          </a>
        </div>
      )}
    </div>
  );
};

export default Pagination;
