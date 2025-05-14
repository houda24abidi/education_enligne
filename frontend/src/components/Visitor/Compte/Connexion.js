import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Connexion.css';

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setMotDePasse] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // مثال بسيط للـ login
    if (email === "admin@example.com" && motDePasse === "admin123") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userRole", JSON.stringify(["admin"]));
      navigate("/admin");
    } else if (email === "etudiant@example.com" && motDePasse === "etud123") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userRole", JSON.stringify(["etudiant"]));
      navigate("/etudiant");
    } else if (email === "enseignant@example.com" && motDePasse === "ens123") {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userRole", JSON.stringify(["enseignant"]));
      navigate("/enseignant");
    } else {
      alert("Email ou mot de passe incorrect !");
    }
  };

  return (
    <div className="login-form">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
        
      </form>
      
    </div>
    
  );
};

export default Connexion;
