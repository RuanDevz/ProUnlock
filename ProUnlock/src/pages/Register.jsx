import React, { useState } from "react";
import Input from "../components/Input";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const data = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, data);
      console.log(response.data);
      console.log("Success")
      console.log(import.meta.env.BACKEND_URL)
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end bg-gray-50 px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src="./src/assets/Register.jpg"
                alt="Registro"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative">
              <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                <h3 className="text-4xl font-bold text-white">
                  Assista Gratuitamente, Apenas com Anúncios!
                </h3>
                <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">
                      Sem Burocracia
                    </span>
                  </li>
                  {/* Outras vantagens */}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Cadastre-se Agora!
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Já tem uma conta?{" "}
                <a
                  href="#"
                  title=""
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  Entrar
                </a>
              </p>

              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <Input
                    label="Username"
                    type="text"
                    name="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Digite seu Username"
                  />
                  <Input
                    label="Endereço de E-mail"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                  />
                  <Input
                    label="Senha"
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                  />
                  <Input
                    label="Confirmar senha"
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirme sua senha"
                  />
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="block w-full rounded-md border border-blue-600 bg-blue-600 py-4 text-center text-lg font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700"
                  >
                    Criar sua conta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
