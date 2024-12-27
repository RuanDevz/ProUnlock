import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 p-8 min-h-screen">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Sobre o ProUnlock
        </h2>
        <p className="text-center text-lg text-gray-700 mb-6">
          O ProUnlock é uma plataforma que oferece links exclusivos para acessar conteúdos premium de forma fácil e segura. Nosso objetivo é proporcionar aos usuários o acesso a plataformas pagas como Netflix, HBO, Disney+ e outros serviços de streaming e conteúdo online, de maneira simples e acessível.
        </p>
        
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Nossa Missão</h3>
        <p className="text-center text-lg text-gray-700 mb-6">
          Nossa missão é garantir que você tenha acesso a uma ampla gama de conteúdos premium sem complicações. Acreditamos que o acesso à cultura, entretenimento e educação deve ser mais acessível, e o ProUnlock facilita isso com links seguros e verificados.
        </p>
        
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Como Funciona</h3>
        <p className="text-center text-lg text-gray-700 mb-6">
          Ao se cadastrar em nosso site, você terá acesso a links encurtados que levam diretamente a plataformas pagas. Esses links são seguros, sempre atualizados e verificados para garantir que você tenha uma experiência tranquila ao acessar os serviços.
        </p>
        
        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Segurança e Privacidade</h3>
        <p className="text-center text-lg text-gray-700 mb-6">
          No ProUnlock, a segurança dos nossos usuários é nossa prioridade. Todos os links fornecidos são cuidadosamente verificados e compartilhamos informações com você de forma transparente. A privacidade de seus dados está protegida por nossas rigorosas políticas de segurança.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
