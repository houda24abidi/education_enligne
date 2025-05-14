import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inscription = () => {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("etudiant");
  const navigate = useNavigate();

  const handleRegister = () => {
    // Simuler un enregistrement : on stocke l'utilisateur dans localStorage
    localStorage.setItem("userName", username);
    localStorage.setItem("userRole", role);
    localStorage.setItem("isLoggedIn", true);

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "etudiant") {
      navigate("/etudiant");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Inscription</h2>

      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block mb-4 p-2 border border-gray-300 rounded w-full"
      />

      <label className="block mb-2">Rôle :</label>
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="p-2 border border-gray-300 rounded mb-4"
      >
        <option value="etudiant">Étudiant</option>
        <option value="admin">Admin</option>
      </select>

      <button
        onClick={handleRegister}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        S'inscrire
      </button>
    </div>
  );
};

export default Inscription;
