import React, { useState } from "react";
import axios from "axios";
import "./AdminSettings.css";

function AdminSettings() {
  const [settings, setSettings] = useState({
    name: "Admin Principal",
    email: "admin@example.com",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [showConfirm, setShowConfirm] = useState(false); // Pour afficher la confirmation

  // Handle input changes and update the settings state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  // Handle the confirmation of form submission
  const handleConfirmSubmit = async () => {
    try {
      const { name, email, password } = settings;

      // Send updated settings to the backend
      const response = await axios.put("http://localhost:5000/api/admin-settings", { name, email, password });

      // Display success message after the update
      if (response.data.message) {
        setMessage("✅ Paramètres mis à jour avec succès !");
        setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
      }
    } catch (error) {
      console.error(error); // Log error if there's an issue
      setMessage("❌ Erreur lors de la mise à jour des paramètres.");
    } finally {
      setShowConfirm(false); // Close the confirmation modal
    }
  };

  // Cancel and close the confirmation modal
  const handleCancelConfirm = () => {
    setShowConfirm(false); // Close the modal without saving
  };

  // Show confirmation modal before submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirm(true); // Show confirmation before saving
  };

  return (
    <div className="admin-settings">
      <h2>⚙️ Paramètres de l'administrateur</h2>
      <form className="settings-form" onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            name="name"
            value={settings.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={settings.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Nouveau mot de passe :
          <input
            type="password"
            name="password"
            value={settings.password}
            onChange={handleChange}
            placeholder="Laisser vide pour ne pas changer"
          />
        </label>
        <button type="submit">Enregistrer</button>
        {message && <p className="success-message">{message}</p>}
      </form>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <p>⚠️ Êtes-vous sûr de vouloir enregistrer ces modifications ?</p>
            <div className="confirm-actions">
              <button className="confirm-yes" onClick={handleConfirmSubmit}>Oui</button>
              <button className="confirm-no" onClick={handleCancelConfirm}>Non</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminSettings;
