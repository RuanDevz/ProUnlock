import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns"; // Para formatar as datas
import Netflix from "../assets/Netflix.png";
import HBO from "../assets/HBO.png";
import AmazonPrime from "../assets/AmazonPrime.png";
import StarLogo from "../assets/Star.png"; // Renomeei aqui
import Crunchyroll from "../assets/Cruchyroll.png";
import Youtube from "../assets/Youtube.png";
import Paramount from "../assets/Paramount.png";
import AppleTV from "../assets/AppleTV.png"; 
import Canva from "../assets/Canva.jpg"; 
import Disney from '../assets/Disney.png'
import ESPNlogo from '../assets/espn.png'
import UFC from '../assets/UFC.png'


const serviceDetails = {
  hbo: {
    logo: HBO,
    color: "#1E1E1E", // Dark for HBO
    text: "Aproveite o melhor conteúdo de filmes e séries da HBO!",
  },
  amazonprime: {
    logo: AmazonPrime,
    color: "#00A8E1", // Blue for Amazon Prime
    text: "Assista a filmes, séries e muito mais com a Amazon Prime Video.",
  },
  starplus: {
    logo: StarLogo, // Usei StarLogo aqui
    color: "#F0C300", // Yellow for Star+
    text: "Descubra uma nova era de entretenimento com Star+.",
  },
  crunchyroll: {
    logo: Crunchyroll,
    color: "#F86B00", // Orange for Crunchyroll
    text: "Os melhores animes do mundo com Crunchyroll.",
  },
  youtube: {
    logo: Youtube,
    color: "#FF0000", // Red for YouTube
    text: "Explore conteúdos de vídeos incríveis com o YouTube Premium.",
  },
  paramount: {
    logo: Paramount,
    color: "#009CDE", // Blue for Paramount+
    text: "Assista a filmes e séries de primeira com Paramount+.",
  },
  appletv: {
    logo: AppleTV,
    color: "#A8B800", // Green for Apple TV+
    text: "Aproveite o melhor conteúdo exclusivo com Apple TV+.",
  },
  canva: {
    logo: Canva,
    color: "#A8B800",
    text: "Crie designs incríveis com o Canva, sua ferramenta definitiva de criatividade!",
  },
  disney: {
    logo: Disney, 
    color: "#004B87",  
    text: "Assista a filmes e séries exclusivas da Disney, Pixar, Marvel, Star Wars e muito mais no Disney+!",
  },
  star: { // Renomeei a chave aqui para starplus
    logo: StarLogo, 
    color: "#E4002B",
    text: "Assista a filmes e séries exclusivas, incluindo conteúdo da Fox, no Star+!",
  },
  espn: { // Renomeei a chave para 'espn'
    logo: ESPNlogo, 
    color: "#E4002B", // Cor para ESPN
    text: "Acompanhe os melhores esportes ao vivo e on-demand com ESPN!",
  },
  ufc: {
    logo: UFC,
    color: "#E4002B",
    text: "Acompanhe os maiores eventos do UFC ao vivo e com análises exclusivas!",
  }
};

const StreamingPage = () => {
  const { serviceName } = useParams();
  const [serviceLinks, setServiceLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); // "desc" para mais recentes, "asc" para mais antigos

  // Link oculto para abrir junto
  const hiddenLink = "https://whomeenoaglauns.com/4/8712652";

  useEffect(() => {
    const fetchServiceLinks = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/streaming/${serviceName}`);
        // Ordena os links pela data de postagem conforme o estado de sortOrder
        const sortedLinks = response.data.sort((a, b) => {
          const dateA = new Date(a.postDate);
          const dateB = new Date(b.postDate);
          return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
        });
        setServiceLinks(sortedLinks);
      } catch (error) {
        setErrorMessage("Ainda não temos links disponíveis para " + serviceName);
      } finally {
        setIsLoading(false);
      }
    };

    fetchServiceLinks();
  }, [serviceName, sortOrder]);

  const { logo, color, text } = serviceDetails[serviceName.toLowerCase()] || {};

  // Função para abrir o link oculto junto com o link do conteúdo
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
    // Abre o link oculto
    window.open(hiddenLink, "_blank");
    // Abre o link do conteúdo
   
  };

  return (
    <div className="flex flex-col items-center justify-between bg-gray-700 min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-md sm:max-w-4xl bg-[#fff] p-6 sm:p-8 rounded-lg shadow-xl flex-grow">
        {logo && (
          <div className="mb-6 flex justify-center">
            <img src={logo} alt={`${serviceName} logo`} className="h-24 w-auto" />
          </div>
        )}

        {text && (
          <h1
            className="text-center text-xl font-bold mb-6"
            style={{ color: color }}
          >
            {text}
          </h1>
        )}

        <p className="text-center text-lg text-gray-700 mb-6">
          Aproveite os links abaixo para acessar diretamente sua conta {serviceName} e outras ofertas especiais!
        </p>

        {/* Filtros para Ordenação */}
        <div className="mb-6 text-center">
          <button
            onClick={() => setSortOrder("desc")}
            className={`px-4 py-2 rounded-md ${sortOrder === "desc" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Mais Recentes
          </button>
          <button
            onClick={() => setSortOrder("asc")}
            className={`ml-4 px-4 py-2 rounded-md ${sortOrder === "asc" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            Mais Antigos
          </button>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-500">Carregando...</p>
        ) : errorMessage ? (
          <p className="text-center text-red-500 font-semibold mt-4">{errorMessage}</p>
        ) : (
          Array.isArray(serviceLinks) && serviceLinks.length > 0 ? (
            serviceLinks.map((link) => (
              <div key={link.id} className="mb-6">
                {/* Exibir a data formatada com aumento no tamanho e font-bold */}
                <p className="text-center text-black text-lg font-bold">
                  {format(new Date(link.postDate), "dd/MM/yyyy")}
                </p>
                <div className="flex justify-center items-center">
                  <a
                    onClick={() => handleLinkClick(link.link)}
                    className="block text-blue-500 underline transition-colors hover:text-blue-700 mt-2 text-xl cursor-pointer"
                  >
                    {link.name}
                  </a>
                  {/* Mensagem piscando */}
                  <span className="text-red-500 ml-4 mt-1 animate-pulse">NOVO!</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-red-500">Sem links disponíveis</p>
          )
        )}
      </div>
    </div>
  );
};

export default StreamingPage;
