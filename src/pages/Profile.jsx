import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Recupera os dados do localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold text-gray-600">Carregando informações do perfil...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header do Perfil */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="mt-1 text-sm">{user.email}</p>
        </div>

        {/* Informações do Usuário */}
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800">Detalhes do Perfil</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Nome de Usuário:</span>
              <span className="font-medium text-gray-800">{user.username}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">E-mail:</span>
              <span className="font-medium text-gray-800">{user.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Status VIP:</span>
              <span
                className={`font-medium ${
                  user.isVip ? "text-green-600" : "text-gray-500"
                }`}
              >
                {user.isVip ? "Ativo" : "Não VIP"}
              </span>
            </div>
            <div className="flex items-center justify-between">
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Conta Criada:</span>
              <span className="font-medium text-gray-800">
                {new Date(user.createdAt).toLocaleDateString("pt-BR")}
              </span>
            </div>
          </div>
        </div>

        {/* Botão de Ações */}
        <div className="p-6 border-t bg-gray-50">
          <button
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700"
            onClick={() => alert("Configurações em breve!")}
          >
            Editar Perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
