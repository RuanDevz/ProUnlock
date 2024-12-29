import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTelegram } from "react-icons/fa"; // Importando o ícone do Telegram

import Netflix from "../assets/Netflix.png";
import HBO from "../assets/HBO.png";
import AmazonPrime from "../assets/AmazonPrime.png";
import Star from "../assets/Star.png";
import Crunchyroll from "../assets/Cruchyroll.png";
import Paramount from "../assets/Paramount.png";
import AppleTV from "../assets/AppleTV.png";
import Canva from "../assets/Canva.jpg";
import Disney from "../assets/Disney.png";
import ESPN from "../assets/espn.png";
import UFC from '../assets/UFC.png';

// Componente de Popup para o Telegram
const TelegramPopup = ({ onClose }) => (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full text-center">
      <h2 className="text-xl font-semibold mb-4">Fique por dentro das atualizações!</h2>
      <p className="text-lg mb-4">Para acompanhar o que está sendo postado, entre no nosso grupo no Telegram:</p>
      <a
        href="https://t.me/+ANUyS5U8AaZmY2Nh"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-4"
      >
        <FaTelegram className="mr-2 text-2xl" /> Acessar o Telegram
      </a>
      <button
        onClick={onClose}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
      >
        Fechar
      </button>
    </div>
  </div>
);

const services = [
  { name: "HBO", logo: HBO, route: "/streaming/hbo" },
  { name: "Amazon Prime", logo: AmazonPrime, route: "/streaming/amazonprime" },
  { name: "Crunchyroll", logo: Crunchyroll, route: "/streaming/crunchyroll" },
  { name: "Paramount+", logo: Paramount, route: "/streaming/paramount" },
  { name: "Apple TV+", logo: AppleTV, route: "/streaming/appletv" },
  { name: "Canva", logo: Canva, route: "/streaming/canva" },
  { name: "Disney+", logo: Disney, route: "/streaming/disney" },
  { name: "Star+", logo: Star, route: "/streaming/star" },
  { name: "ESPN", logo: ESPN, route: "/streaming/espn" },
  { name: "UFC", logo: UFC, route: "/streaming/ufc" },
];

const Pagination = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showPopup, setShowPopup] = useState(true); // Estado para controlar o popup
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    // Exibe o popup quando o componente for montado
    setShowPopup(true);
  }, []);

  const handleServiceClick = (service) => {
    navigate(service.route);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filtra os serviços com base na pesquisa
    const filtered = services.filter(service =>
      service.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredServices(filtered);
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Fecha o popup
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 p-8 font-sans pb-40 min-h-screen">
      {showPopup && <TelegramPopup onClose={handleClosePopup} />} {/* Exibe o popup */}

      {/* Barra de Pesquisa */}
      <div className="mb-8 w-full max-w-screen-xl px-4">
        <input
          type="text"
          placeholder="Buscar serviços de streaming..."
          className="w-full p-4 text-lg rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          value={searchQuery}
          onChange={handleSearchChange}
        />

        {/* Sugestões abaixo do campo de pesquisa */}
        {searchQuery && filteredServices.length > 0 && (
          <div className="mt-2 bg-gray-700 text-white rounded-lg shadow-lg w-full max-w-screen-xl px-4 py-2">
            <ul>
              {filteredServices.map((service) => (
                <li
                  key={service.name}
                  onClick={() => handleServiceClick(service)}
                  className="cursor-pointer py-2 px-4 hover:bg-indigo-500 hover:text-white rounded"
                >
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Serviços mais acessados */}
      <div id="mais-acessados" className="w-full max-w-screen-xl px-4 mb-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Serviços disponíveis
          
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
    </div>
  );
};

export default Pagination;
