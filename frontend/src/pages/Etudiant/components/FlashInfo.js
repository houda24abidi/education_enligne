import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/FlashInfo.css';

const FlashInfo = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const infos = [
    { 
      id: 1, 
      title: "Examen de math reporté au 20 avril", 
      details: "L'examen de mathématiques initialement prévu le 15 avril a été reporté au 20 avril. Veuillez ajuster votre emploi du temps.",
      type: "Examens"
    },
    { 
      id: 2, 
      title: "Nouveau cours de React disponible !", 
      details: "Un nouveau module de cours sur React est maintenant disponible. Il couvre les Hooks, le routing et l'état global.",
      type: "Cours"
    },
    { 
      id: 3, 
      title: "Maintenance prévue le 22 avril à 22h", 
      details: "Une maintenance du système est prévue le 22 avril à partir de 22h. Pendant cette période, certaines fonctionnalités seront indisponibles.",
      type: "Maintenance"
    },
    {
      id: 4,
      title: "Webinaire sur l'enseignement à distance le 25 avril",
      details: "Un webinaire est prévu pour les enseignants sur les meilleures pratiques d'enseignement à distance. Inscrivez-vous maintenant!",
      type: "Événements"
    },
    {
      id: 5,
      title: "Résultats des tests disponibles",
      details: "Les résultats des tests de la semaine dernière sont maintenant disponibles. Consultez votre tableau de bord pour plus de détails.",
      type: "Résultats"
    },
    {
      id: 6,
      title: "Atelier sur la création de contenu interactif le 30 avril",
      details: "Rejoignez-nous pour un atelier sur la création de contenu interactif pour vos cours en ligne. Inscrivez-vous dès maintenant.",
      type: "Ateliers"
    }
  ];

  // Fonction pour afficher les détails
  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };

  // Fonction pour fermer les détails
  const closeDetails = () => {
    setSelectedInfo(null);
  };

  return (
    <div className="flash-info-page">
      <h1>Flash Info</h1>

      {/* Liste des flash infos */}
      {!selectedInfo ? (
        <div className="flash-categories">
          {['Examens', 'Cours', 'Maintenance', 'Événements', 'Résultats', 'Ateliers'].map(category => (
            <motion.div
              key={category}
              className="category"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2>{category}</h2>
              <ul className="flash-list">
                {infos.filter(info => info.type === category).map(info => (
                  <motion.li 
                    key={info.id} 
                    className="flash-item"
                    onClick={() => handleInfoClick(info)} 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    🔔 {info.title}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      ) : (
        // Détails de l'info sélectionnée
        <motion.div
          className="flash-detail"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>{selectedInfo.title}</h2>
          <p>{selectedInfo.details}</p>
          <button onClick={closeDetails}>Retour</button>
        </motion.div>
      )}
    </div>
  );
};

export default FlashInfo;
