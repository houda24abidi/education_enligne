import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/chapterCourses.css';

const ChapterCourses = ({ chapitreNom, cours }) => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/cours/${courseId}`);
  };

  return (
    <div className="chapter-courses-container">
      <h2 className="chapter-title">Cours du chapitre : {chapitreNom}</h2>
      <div className="course-list">
        {cours.map((course, index) => (
          <div key={index} className="course-item">
            <p className="course-name">{course.nom}</p>
            {/* Navigation to the course detail page */}
            <button onClick={() => handleCourseClick(course.id)} className="view-course-button">
              Voir le cours
            </button>
            <a href={course.lien} className="download-button" download>
              Télécharger
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterCourses;
