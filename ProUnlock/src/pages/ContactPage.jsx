import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  // Função para atualizar os dados do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Função para enviar o formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    // Simulação de envio (substitua com sua API ou lógica de envio real)
    setTimeout(() => {
      setStatus('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
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
          <div className="mt-4 text-center text-lg text-green-600">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
