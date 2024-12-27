import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Obtém o token da URL
  const location = useLocation();
  const navigate = useNavigate();
  const token = new URLSearchParams(location.search).get('token');

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se as senhas coincidem
    if (newPassword !== confirmPassword) {
      setError('A nova senha e a confirmação de senha não coincidem.');
      return;
    }

    try {
      // Envia o token e a nova senha para o backend
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/resetpassword`, {
        token,
        password: newPassword, // Corrigido para enviar 'password' ao invés de 'newPassword'
      });

      setSuccessMessage(response.data.message);
      setError('');

      // Redireciona o usuário para a tela de login ou outra página após sucesso
      setTimeout(() => {
        navigate('/entrar');
      }, 3000);

    } catch (error) {
      setError(error.response?.data?.error || 'Erro ao redefinir a senha.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Redefinir Senha</h2>
        <p className="text-center text-sm text-gray-500">
          Insira sua nova senha e a confirmação para redefinir sua senha.
        </p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Erro */}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {/* Sucesso */}
          {successMessage && (
            <div className="text-green-500 text-sm text-center">
              {successMessage}
            </div>
          )}

          <div className="space-y-4">
            {/* Novo campo de senha */}
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                Nova Senha
              </label>
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Sua nova senha"
              />
            </div>

            {/* Confirmar campo de senha */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirmar Senha
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Confirme sua nova senha"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-indigo-700"
            >
              Redefinir Senha
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Já tem uma conta?{' '}
            <a href="/login" className="text-indigo-600 hover:text-indigo-800">
              Faça login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
