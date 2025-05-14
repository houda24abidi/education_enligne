import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Chapitres.css"; // si tu veux utiliser ton CSS existant

const chapitres = [
  { id: 1, titre: "Chapitre 1 - Introduction à JavaScript" },
  { id: 2, titre: "Chapitre 2 - Cours vidéo React" },
  { id: 3, titre: "Chapitre 3 - Résumé en texte" },
];

const ChapitreList = () => {
  const navigate = useNavigate();

  const handleVoirChapitre = (id) => {
    navigate(`/etudiant/cours/${id}`);
};

  return (
    <div className="chapitre-list-container">
      <h2>Mes Chapitres</h2>
      <ul className="chapitre-list">
        {chapitres.map((chapitre) => (
          <li key={chapitre.id} className="chapitre-item">
            <div>{chapitre.titre}</div>
            <button onClick={() => handleVoirChapitre(chapitre.id)}>
              Voir Chapitre
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapitreList;