import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Chapitres.css';

const chapitreData = {
  1: {
    name: "Chapitre 1",
    cours: [
      { id: 1, name: "Cours 1.pdf" },
      { id: 2, name: "Cours 2.mp4" },
      { id: 3, name: "Cours 3.docx" },
    ],
  },
};

const ChapitreDetail = () => {
  const { id } = useParams();
  const chapitre = chapitreData[id];
  const navigate = useNavigate();

  if (!chapitre) return <div className="chapitre-detail">Chapitre introuvable</div>;

  return (
    <div className="chapitre-detail">
      <h3>{chapitre.name} - Cours</h3>
      <ul>
        {chapitre.cours.map((cours) => (
          <li key={cours.id} className="chapitre-item">
            <span>{cours.name}</span>
            <button className="voir-btn" onClick={() => navigate(`/cours/${cours.id}`)}>Voir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChapitreDetail;
