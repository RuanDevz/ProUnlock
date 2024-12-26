import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import axios from "axios";
import streamings from '../assets/streamings.jpg'

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos!");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem!");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    const data = { username, email, password };

    try {
      // Faz a requisição de registro
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, data);

      const { token, user } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      window.location.href = "/";
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      setError(
        error.response?.data?.error || "Erro ao registrar usuário. Tente novamente."
      );
    }
  };

  return (
    <div>
      <section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Seção de imagem */}
          <div className="relative flex items-end bg-gray-50 px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={streamings}
                alt="Registro"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="relative">
              <h3 className="text-4xl font-bold text-white">
                Assista Gratuitamente, Apenas com Anúncios!
              </h3>
            </div>
          </div>

          {/* Seção de formulário */}
          <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Cadastre-se Agora!
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Já tem uma conta?{" "}
                <a
                  href="#/entrar"
                  title="Login"
                  className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
                >
                  Entrar
                </a>
              </p>

              <form className="mt-8" onSubmit={handleSubmit}>
                <div className="space-y-5">
                  <Input
                    label="Username"
                    type="text"
                    name="username"
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

                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                {message && <p className="mt-2 text-base text-green-600">{message}</p>}

                <div className="mt-8">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-blue-600 py-4 text-lg font-semibold text-white hover:bg-blue-700"
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
