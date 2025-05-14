import React, { useEffect, useState } from "react";
import { getCourses, deleteCourse } from "../../../services/courseService";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import axios from 'axios';  // N7ot hadi fl'awal el code


const TeacherManageCourses = () => {
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  const handleDelete = (id) => {
    deleteCourse(id);
    setCourses(getCourses());
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    // Faire une requête GET au backend
    axios.get('http://localhost:5000/')
      .then(response => {
        console.log(response.data); // Afficher la réponse du backend
      })
      .catch(error => {
        console.error('Il y a eu une erreur!', error);
      });
  }, []);


  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Mes Cours</h2>

      <Link
        to="/enseignant/ajouter-cours"
        className="bg-green-500 text-white p-2 rounded mb-4 inline-block"
      >
        + Ajouter Cours
      </Link>

      <div className="mb-4">
        <SearchInput onSearch={setSearchTerm} />
      </div>

      {filteredCourses.length === 0 ? (
        <p>Aucun cours trouvé.</p>
      ) : (
        <ul className="space-y-4">
          {filteredCourses.map((course) => (
            <li
              key={course.id}
              className="border p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <button
                onClick={() => handleDelete(course.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeacherManageCourses;
