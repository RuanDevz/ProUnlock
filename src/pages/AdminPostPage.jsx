import React, { useState, useEffect } from "react";
import axios from "axios";

const platforms = [
  { name: "Netflix", key: "netflix" },
  { name: "HBO", key: "hbo" },
  { name: "Amazon Prime", key: "amazonprime" },
  { name: "Star+", key: "starplus" },
  { name: "Crunchyroll", key: "crunchyroll" },
  { name: "YouTube Premium", key: "youtube" },
  { name: "Paramount+", key: "paramount" },
  { name: "Apple TV+", key: "appletv" },
];

const AdminPostPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0].key); // Default to Netflix
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    link: "",
    service: "",
    postDate: new Date().toISOString().split("T")[0], // Default to today
  });
  const [isEditing, setIsEditing] = useState(false);

  const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/streaming`;

  // Fetch posts when selected platform changes
  useEffect(() => {
    const fetchPosts = async () => {
      // Limpa os posts enquanto a nova requisição está em andamento
      setPosts([]);
      try {
        const response = await axios.get(`${API_URL}/${selectedPlatform}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
        setPosts([]); // Certifica-se de que a lista está vazia em caso de erro
      }
    };

    fetchPosts();
  }, [selectedPlatform]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle platform selection
  const handlePlatformChange = (e) => {
    setSelectedPlatform(e.target.value);
  };

  // Handle add or edit post
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEditing) {
        // Edit post
        await axios.put(`${API_URL}/${formData.id}`, formData);
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === formData.id ? { ...post, ...formData } : post
          )
        );
      } else {
        // Add post
        const response = await axios.post(API_URL, {
          ...formData,
          service: selectedPlatform,
        });
        setPosts((prevPosts) => [...prevPosts, response.data]);
      }

      setFormData({
        id: null,
        name: "",
        link: "",
        service: "",
        postDate: new Date().toISOString().split("T")[0],
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Erro ao salvar o post:", error);
    }
  };

  // Handle delete post
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Erro ao deletar o post:", error);
    }
  };

  // Handle edit post
  const handleEdit = (post) => {
    setFormData({
      id: post.id,
      name: post.name,
      link: post.link,
      service: post.service,
      postDate: new Date(post.postDate).toISOString().split("T")[0],
    });
    setIsEditing(true);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Gerenciar Postagens
      </h1>

      {/* Select de plataforma */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Selecionar Plataforma
        </label>
        <select
          value={selectedPlatform}
          onChange={handlePlatformChange}
          className="w-full border rounded px-3 py-2"
        >
          {platforms.map((platform) => (
            <option key={platform.key} value={platform.key}>
              {platform.name}
            </option>
          ))}
        </select>
      </div>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Link</label>
          <input
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Data</label>
          <input
            type="date"
            name="postDate"
            value={formData.postDate}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {isEditing ? "Salvar Alterações" : "Adicionar Postagem"}
        </button>
      </form>

      {/* Lista de Posts */}
      <div className="space-y-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="flex justify-between items-center p-4 bg-white shadow rounded-lg"
            >
              <div>
                <h3 className="text-lg font-bold">{post.name}</h3>
                <p className="text-sm text-gray-600">{post.service}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {post.link}
                </a>
                <p className="text-xs text-gray-400">
                  Publicado em: {new Date(post.postDate).toLocaleDateString()}
                </p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Excluir
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            Nenhum post encontrado para esta plataforma.
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminPostPage;
