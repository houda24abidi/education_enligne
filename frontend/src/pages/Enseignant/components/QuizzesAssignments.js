import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/QuizzesAssignments.css";

const QuizzesAssignments = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [newQuiz, setNewQuiz] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [editQuizId, setEditQuizId] = useState(null);
  const [editQuizTitle, setEditQuizTitle] = useState('');

  // Fonction pour récupérer les quizzes depuis le backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/quizzes')
      .then(response => {
        setQuizzes(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des quizzes:', error);
      });
  }, []);

  // Fonction pour ajouter un quiz
  const addQuiz = () => {
    if (newQuiz.trim() !== '') {
      const formData = new FormData();
      formData.append('titre', newQuiz);
      selectedFiles.forEach(file => formData.append('files', file));

      axios.post('http://localhost:5000/api/quizzes', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(response => {
          setQuizzes([...quizzes, response.data]);
          setNewQuiz('');
          setSelectedFiles([]);
        })
        .catch(error => {
          console.error('Erreur lors de l\'ajout du quiz:', error);
        });
    }
  };

  // Fonction pour gérer l'ajout de fichiers
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  // Fonction pour supprimer un quiz
  const deleteQuiz = (id) => {
    axios.delete(`http://localhost:5000/api/quizzes/${id}`)
      .then(() => {
        const updatedQuizzes = quizzes.filter((quiz) => quiz._id !== id);
        setQuizzes(updatedQuizzes);
      })
      .catch(error => {
        console.error('Erreur lors de la suppression du quiz:', error);
      });
  };

  // Fonction pour activer le mode édition
  const editQuiz = (id) => {
    const quizToEdit = quizzes.find((quiz) => quiz._id === id);
    setEditQuizId(id);
    setEditQuizTitle(quizToEdit.titre);
  };

  // Fonction pour sauvegarder les modifications
  const saveEditQuiz = () => {
    if (editQuizTitle.trim() !== '') {
      axios.put(`http://localhost:5000/api/quizzes/${editQuizId}`, { titre: editQuizTitle })
        .then(response => {
          const updatedQuizzes = quizzes.map((quiz) =>
            quiz._id === editQuizId ? response.data : quiz
          );
          setQuizzes(updatedQuizzes);
          setEditQuizId(null);
          setEditQuizTitle('');
        })
        .catch(error => {
          console.error('Erreur lors de la modification du quiz:', error);
        });
    }
  };

  return (
    <div className="quizzes-assignments-container">
      <h1 className="quizzes-assignments-title">📝 Gestion des Quizz et Devoirs</h1>

      {/* Section d'ajout de quiz */}
      <div className="quizzes-assignments-inputs">
        <input
          type="text"
          value={newQuiz}
          onChange={(e) => setNewQuiz(e.target.value)}
          placeholder="Nouveau quiz ou devoir"
          className="quizzes-assignments-input"
        />
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="quizzes-assignments-file-input"
        />
        <button onClick={addQuiz} className="quizzes-assignments-btn">
          Ajouter
        </button>
      </div>

      {/* Liste des quizz */}
      <ul className="quizzes-assignments-list">
        {quizzes.map((q) => (
          <li key={q._id} className="quizzes-assignment-item">
            {editQuizId === q._id ? (
              <div>
                <input
                  type="text"
                  value={editQuizTitle}
                  onChange={(e) => setEditQuizTitle(e.target.value)}
                  className="quizzes-assignments-edit-input"
                />
                <button onClick={saveEditQuiz} className="quizzes-assignments-save-btn">Sauvegarder</button>
              </div>
            ) : (
              <div>
                <span>{q.titre}</span>
                <button onClick={() => editQuiz(q._id)} className="quizzes-assignments-edit-btn">
                  Modifier
                </button>
                <button onClick={() => deleteQuiz(q._id)} className="quizzes-assignments-delete-btn">
                  Supprimer
                </button>
              </div>
            )}
            {/* Afficher les fichiers associés */}
            {q.files && q.files.length > 0 && (
              <div className="files-list">
                <h3>Fichiers associés :</h3>
                <ul>
                  {q.files.map((file, index) => (
                    <li key={index}>
                      <a href={file} target="_blank" rel="noopener noreferrer">
                        {file.split('/').pop()}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizzesAssignments;
