import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Netflix from "../assets/Netflix.png";
import HBO from "../assets/HBO.png";
import AmazonPrime from "../assets/AmazonPrime.png";
import Star from "../assets/Star.png";
import Crunchyroll from "../assets/Cruchyroll.png";
import Paramount from "../assets/Paramount.png";
import AppleTV from "../assets/AppleTV.png";
import Banner from "../assets/Banner.png";
import Canva from "../assets/Canva.jpg";
import Disney from "../assets/Disney.png";
import ESPN from "../assets/espn.png";
import axios from "axios";
import CarouselSection from "./CarouselSection";

const services = [
  { name: "Netflix", logo: Netflix, route: "/streaming/netflix" },
  { name: "HBO", logo: HBO, route: "/streaming/hbo" },
  { name: "Amazon Prime", logo: AmazonPrime, route: "/streaming/amazonprime" },
  { name: "Crunchyroll", logo: Crunchyroll, route: "/streaming/crunchyroll" },
  { name: "Paramount+", logo: Paramount, route: "/streaming/paramount" },
  { name: "Apple TV+", logo: AppleTV, route: "/streaming/appletv" },
  { name: "Canva", logo: Canva, route: "/streaming/canva" },
  { name: "Disney+", logo: Disney, route: "/streaming/disney" },
  { name: "Star+", logo: Star, route: "/streaming/star" },
  { name: "ESPN", logo: ESPN, route: "/streaming/espn" },
];

const Pagination = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleServiceClick = (service) => {
    navigate(service.route);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    // Armazena no localStorage que o popup foi fechado
    localStorage.setItem("popupClosed", "true");
  };

  useEffect(() => {
    // Verifica se o popup já foi fechado (se a chave estiver presente no localStorage)
    const popupClosed = localStorage.getItem("popupClosed");

    if (!popupClosed) {
      setShowPopup(true); // Exibe o popup se não estiver fechado
    }

    // Requisição de exemplo
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/streaming/netflix`)
      .then((response) => {
        console.log(response.data);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-700 p-8 font-sans pb-20">
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md text-center max-w-sm">
            <h2 className="text-xl font-semibold mb-4">Beta Version</h2>
            <p className="mb-4">
              O site está em fase beta. Caso encontre algum problema, entre em
              contato em:
              <a
                href="mailto:prounlocksuporte@gmail.com"
                className="text-blue-500 underline ml-1"
              >
                prounlocksuport@gmail.com
              </a>
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={handleClosePopup}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      <div className="w-full max-w-screen-xl">
        {/* <CarouselSection /> */}
      </div>

      <div id="servicos" className="mt-12 w-full max-w-screen-xl px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
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
    </div>
  );
};

export default Pagination;
