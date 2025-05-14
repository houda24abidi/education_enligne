import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="not-found-container">
      <h1>🛑 404 - Page non trouvée</h1>
      <p>🔍 La page que vous recherchez est introuvable ou a été déplacée.</p>
      <button className="go-back-button" onClick={handleGoBack}>
        ↩️ Retour à la page précédente
      </button>
    </div>
  );
};

export default NotFound;
