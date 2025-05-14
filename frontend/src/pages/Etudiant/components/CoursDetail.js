import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Chapitres.css';

const coursData = {
  1: {
    id: 1,
    nom: 'Introduction au JavaScript',
    type: 'pdf',
    contentUrl: '/docs/javascript-intro.pdf',
    downloadUrl: '/docs/javascript-intro.pdf',
  },
  2: {
    id: 2,
    nom: 'Cours vidéo React',
    type: 'video',
    contentUrl: '/videos/react-course.mp4',
    downloadUrl: '/videos/react-course.mp4',
  },
  3: {
    id: 3,
    nom: 'Cours résumé en texte',
    type: 'text',
    content: `Introduction à l'informatique

L'informatique est la science du traitement automatique de l'information...
Les principales branches de l'informatique comprennent :
- Programmation
- Réseaux
- Bases de données
- Sécurité informatique
- Intelligence artificielle`,
    downloadUrl: '/docs/hooks-summary.txt',
  }
};

const CoursDetail = () => {
  const { id } = useParams();
  const cours = coursData[id];

  if (!cours) return <div>Cours introuvable</div>;

  return (
    <div className="chapitre-detail">
      <h3>{cours.nom}</h3>

      {cours.type === 'pdf' && (
        <embed src={cours.contentUrl} type="application/pdf" />
      )}

      {cours.type === 'video' && (
        <video controls>
          <source src={cours.contentUrl} type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
      )}

      {cours.type === 'text' && (
        <div className="text-content">
          <pre style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>
            {cours.content}
          </pre>
        </div>
      )}

      <a href={cours.downloadUrl} download>Télécharger</a>
    </div>
  );
};

export default CoursDetail;
