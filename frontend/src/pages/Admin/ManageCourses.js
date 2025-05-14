import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManageCourses.css";

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ title: "", description: "", category: "", level: "" });
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // 🔃 Charger les cours depuis le backend
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Erreur lors du chargement des cours :", err.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  const handleAddCourse = async (e) => {
    e.preventDefault();

    if (!newCourse.title || !newCourse.description || !newCourse.category || !newCourse.level) {
      setErrorMessage("❌ Veuillez remplir tous les champs !");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/courses", newCourse);
      setCourses([...courses, res.data]);
      setNewCourse({ title: "", description: "", category: "", level: "" });
      setErrorMessage("");
    } catch (err) {
      console.error("Erreur lors de l'ajout :", err.message);
      setErrorMessage("❌ Une erreur est survenue !");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      setCourses(courses.filter((course) => course._id !== id));
    } catch (err) {
      console.error("Erreur lors de la suppression :", err.message);
    }
  };

  const handleConfirmedDelete = () => {
    if (selectedCourseId) {
      handleDelete(selectedCourseId);
      setShowConfirm(false);
      setSelectedCourseId(null);
    }
  };

  return (
    <div className="manage-courses">
      <h2>🎓 Gestion des cours</h2>

      <form className="course-form" onSubmit={handleAddCourse}>
        <input type="text" name="title" placeholder="Titre du cours" value={newCourse.title} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={newCourse.description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Catégorie" value={newCourse.category} onChange={handleChange} />
        <select name="level" value={newCourse.level} onChange={handleChange}>
          <option value="">Choisir un niveau</option>
          <option value="Débutant">Débutant</option>
          <option value="Intermédiaire">Intermédiaire</option>
          <option value="Avancé">Avancé</option>
        </select>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Ajouter</button>
      </form>

      <div className="course-list">
        {courses.map((course) => (
          <div className="course-card" key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => { setSelectedCourseId(course._id); setShowConfirm(true); }}>
              🗑 Supprimer
            </button>
          </div>
        ))}
      </div>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <p>⚠️ Êtes-vous sûr de vouloir supprimer ce cours ?</p>
            <div className="confirm-actions">
              <button className="confirm-yes" onClick={handleConfirmedDelete}>Oui</button>
              <button className="confirm-no" onClick={() => setShowConfirm(false)}>Non</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageCourses;
