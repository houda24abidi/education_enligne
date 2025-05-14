import React from 'react';
import axios from "axios";

import "./Logout.css";


function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    window.location.href = "/"; // Redirige vers l'accueil
  };

  return (
    <div className="logout-page flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Déconnexion</h2>
      <p className="text-gray-700 mb-6">Voulez-vous vraiment vous déconnecter ?</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow"
      >
        Se déconnecter
      </button>
    </div>
  );
}

export default Logout;
