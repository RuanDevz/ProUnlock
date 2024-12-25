import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);

  // Função para atualizar os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setStatus(result.message || 'Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        setStatus('Erro ao enviar mensagem.');
        setError(errorData.error || 'Erro desconhecido.');
      }
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      setStatus('Erro ao enviar mensagem.');
      setError(error.message || 'Erro desconhecido.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8 min-h-screen">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Fale Conosco
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          Se você tiver alguma dúvida, sugestão ou precisar de ajuda, envie uma mensagem e nossa equipe entrará em contato o mais breve possível.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Enviar Mensagem
          </button>
        </form>

        {status && (
          <div className={`mt-4 text-center text-lg ${error ? 'text-red-600' : 'text-green-600'}`}>
            {status}
          </div>
        )}
        {error && (
          <div className="mt-2 text-center text-sm text-red-500">
            Detalhes do erro: {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
