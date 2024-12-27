import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para a mensagem de erro

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        userData
      );

      const { token, user } = response.data;
      console.log(user)

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      window.location.href = "/";
    } catch (error) {
      console.error("Erro ao fazer login:", error);

      // Define a mensagem de erro baseada no erro recebido
      if (error.response && error.response.data && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Mensagem específica do servidor
      } else {
        setErrorMessage("Erro ao fazer login. Verifique suas credenciais."); // Mensagem genérica
      }
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Formulário de Login */}
          <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Entre na sua Conta
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Ainda não tem uma conta?{" "}
                <a
                  href="#/criarconta"
                  title=""
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  Crie uma conta gratuita
                </a>
              </p>

              {/* Exibição de Erro */}
              {errorMessage && (
                <div className="mt-4 rounded-md bg-red-100 p-4 text-red-700">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleLogin} method="POST" className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-base font-medium text-gray-900"
                    >
                      E-mail
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu e-mail para começar"
                        className="block w-full rounded-md border border-gray-200 bg-gray-50 p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="text-base font-medium text-gray-900"
                      >
                        Senha
                      </label>
                      <a
                        href="#/forgotpassword"
                        title=""
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline focus:text-blue-700"
                      >
                        Esqueceu a senha?
                      </a>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua senha"
                        className="block w-full rounded-md border border-gray-200 bg-gray-50 p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                    >
                      Entrar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Imagem e Descrição */}
          <div className="flex items-center justify-center bg-gray-50 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div>
              <img
                className="mx-auto w-full rounded-lg"
                src="https://imagem.natelinha.uol.com.br/original/opcoes-streamings-ibope_1354.jpeg"
                alt="Streaming"
              />
              <div className="mx-auto w-full max-w-md xl:max-w-xl">
                <h3 className="text-center text-2xl font-bold text-black">
                  O que você está esperando?
                </h3>
                <p className="mt-2.5 text-center leading-relaxed text-gray-500">
                  Tenha os melhores streamings de forma totalmente gratuita!
                </p>

                <div className="mt-10 flex items-center justify-center space-x-3">
                  <div className="h-1.5 w-20 rounded-full bg-orange-500"></div>
                  <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
                  <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
