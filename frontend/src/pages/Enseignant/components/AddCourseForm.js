import React, { useState } from "react";
import { addCourse } from "../../../services/courseService";
import { useNavigate } from "react-router-dom";

const AddCourseForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCourse = {
      id: Date.now(), // id unique
      title,
      description,
    };

    addCourse(newCourse);

    setTitle("");
    setDescription("");

    navigate("/enseignant/cours"); // après ajout, retour liste cours
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Ajouter un nouveau cours</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Titre du cours :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label className="block">Description :</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="border p-2 w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Ajouter Cours
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
