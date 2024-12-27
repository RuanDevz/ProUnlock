import React, { useEffect, useState } from "react";
import axios from "axios";

const Insights = () => {
  const [insights, setInsights] = useState(null);

  // Função para buscar os dados dos insights
  const fetchInsights = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/insights`);
      setInsights(response.data);
    } catch (error) {
      console.error("Erro ao buscar os dados dos insights", error);
    }
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  if (!insights) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-gray-600">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Insights do Site</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Total de Visitantes */}
        <div className="bg-gradient-to-r from-teal-400 to-teal-600 p-6 rounded-xl shadow-lg text-white text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Visitantes Totais</h2>
          <p className="text-3xl font-bold">{insights.totalVisitors}</p>
        </div>

        {/* Total de Usuários Cadastrados */}
        <div className="bg-gradient-to-r from-indigo-400 to-indigo-600 p-6 rounded-xl shadow-lg text-white text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Usuários Cadastrados</h2>
          <p className="text-3xl font-bold">{insights.totalUsers}</p>
        </div>

        {/* Total de Usuários Premium */}
        <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl shadow-lg text-white text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Usuários Premium</h2>
          <p className="text-3xl font-bold">{insights.totalPremiumUsers}</p>
        </div>

        {/* Total de Usuários Gratuitos */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-xl shadow-lg text-white text-center transform transition duration-500 hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4">Usuários Gratuitos</h2>
          <p className="text-3xl font-bold">{insights.totalFreeUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default Insights;
