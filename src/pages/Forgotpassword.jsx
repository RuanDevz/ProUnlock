import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/forgotpassword`, { email });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'Erro ao enviar o e-mail de recuperação.';
      setError(errorMessage);
      setMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">Recuperar Senha</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu email"
            aria-label="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full text-white font-medium py-2 mt-4 rounded focus:ring ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300'
            }`}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        {message && <p className="text-green-600 mt-4">✔ {message}</p>}
        {error && <p className="text-red-600 mt-4">✖ {error}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
