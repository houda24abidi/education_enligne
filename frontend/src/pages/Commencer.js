import React from "react";

const Commencer = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-indigo-700 mb-6">Bienvenue sur EduNet 🎓</h1>

      <p className="text-lg mb-4">
        <strong>EduNet</strong> est une plateforme d’apprentissage en ligne moderne, conçue pour faciliter la communication entre les <strong>étudiants</strong>, les <strong>enseignants</strong> et l’administration.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">📚 Cours et Chapitres</h2>
          <p>
            Accédez à des cours organisés par matière et chapitre. Les enseignants peuvent ajouter des PDF, vidéos, quiz et devoirs.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">🧑‍🏫 Espace Enseignant</h2>
          <p>
            Les enseignants peuvent gérer leurs cours, envoyer des notifications aux étudiants, corriger des devoirs et suivre la progression.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">👨‍🎓 Espace Étudiant</h2>
          <p>
            Les étudiants peuvent consulter les cours, soumettre les devoirs, participer aux quiz et recevoir des messages en temps réel.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-indigo-600">🔔 Notifications & Infos</h2>
          <p>
            Restez informé grâce aux flash infos, notifications, et rappels envoyés par les enseignants ou l’administration.
          </p>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/login"
          className="inline-block bg-indigo-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          Se connecter pour commencer →
        </a>
      </div>
    </div>
  );
};

export default Commencer;
