import React, { useState, useEffect } from "react";
import axios from "axios";

import "./AdminProject.css";

function AdminProject() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: "",
    owner: "",
  });

  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    // Charger les projets depuis l'API au chargement du composant
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des projets:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/projects", newProject);
      setProjects([...projects, response.data]);
      setNewProject({ title: "", owner: "" });
      setSuccessMessage("✅ Projet ajouté avec succès !");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Erreur lors de l'ajout du projet:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/projects/${id}`);
      setProjects(projects.filter((proj) => proj._id !== id)); // Mise à jour de la liste après suppression
      setSuccessMessage("🗑️ Projet supprimé avec succès !");
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Erreur lors de la suppression du projet:", error);
    }
  };

  const handleConfirmedDelete = () => {
    if (selectedProjectId !== null) {
      handleDelete(selectedProjectId);
      setShowConfirm(false);
      setSelectedProjectId(null);
    }
  };

  return (
    <div className="admin-project">
      <h2>📁 Gestion des Projets</h2>

      <form className="project-form" onSubmit={handleAddProject}>
        <input
          type="text"
          name="title"
          value={newProject.title}
          onChange={handleChange}
          placeholder="Nom du projet"
          required
        />
        <input
          type="text"
          name="owner"
          value={newProject.owner}
          onChange={handleChange}
          placeholder="Responsable"
          required
        />
        <button type="submit">Ajouter</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <h3>{project.title}</h3>
            <p>Responsable : {project.owner}</p>
            <button
              onClick={() => {
                setSelectedProjectId(project._id);
                setShowConfirm(true);
              }}
            >
              🗑 Supprimer
            </button>
          </div>
        ))}
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <p>⚠️ Êtes-vous sûr de vouloir supprimer ce projet ?</p>
            <div className="confirm-actions">
              <button className="confirm-yes" onClick={handleConfirmedDelete}>
                Oui
              </button>
              <button className="confirm-no" onClick={() => setShowConfirm(false)}>
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProject;
