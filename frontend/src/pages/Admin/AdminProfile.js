import React, { useState } from "react";
import axios from "axios";

import "./AdminProfile.css";

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    name: "Admin Principal",
    email: "admin@edunet.tn",
    role: "Administrateur",
    password: "********",
  });

  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState(admin);
  const [avatar, setAvatar] = useState(null); // État pour l'avatar

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setEditData(admin);
    setShowModal(true);
  };

  const handleSave = () => {
    setAdmin({
      ...editData,
      password: editData.password ? "********" : admin.password,
    });
    setShowModal(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result); // Met à jour l'avatar
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="admin-profile">
      <h2>👤 Profil Administrateur</h2>
      
      <div className="profile-card">
        <img
        src={avatar || process.env.PUBLIC_URL + '/assets/avatar-admin.png'}
        alt="Admin Avatar"
        className="admin-avatar"
        />
        <div className="profile-info">
          <p><strong>Nom :</strong> {admin.name}</p>
          <p><strong>Email :</strong> {admin.email}</p>
          <p><strong>Rôle :</strong> {admin.role}</p>
          <p><strong>Mot de passe :</strong> {admin.password}</p>
        </div>
        <div className="edit-actions">
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="file-input"
          />
          <button className="edit-btn" onClick={handleEdit}>✏️ Modifier</button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>✏️ Modifier le profil</h3>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={editData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={editData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Nouveau mot de passe"
              value={editData.password === "********" ? "" : editData.password}
              onChange={handleChange}
            />
            <div className="modal-actions">
              <button className="save-btn" onClick={handleSave}>💾 Sauvegarder</button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>❌ Annuler</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
