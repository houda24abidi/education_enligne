import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">
      <h1>📊 Tableau de bord - Admin</h1>

      <div className="admin-stats">
        <div className="stat-card">
          <h2>25</h2>
          <p>Cours actifs</p>
        </div>
        <div className="stat-card">
          <h2>150</h2>
          <p>Étudiants inscrits</p>
        </div>
        <div className="stat-card">
          <h2>10</h2>
          <p>Enseignants</p>
        </div>
      </div>

      <div className="admin-actions">
        <button onClick={() => navigate("/admin/manage-users")}>
          Gérer les utilisateurs
        </button>
        <button onClick={() => navigate("/admin/settings")}>
          Paramètres
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;