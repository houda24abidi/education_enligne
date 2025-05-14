import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [teacherData, setTeacherData] = useState({
    nom: "",
    email: "",
    specialite: "",
    phone: "",
  });
  
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Charger les données depuis l'API backend avec Axios
    axios.get("http://localhost:5000/api/teacher/profile")
      .then((response) => {
        setTeacherData(response.data);
      })
      .catch((err) => console.error("Erreur:", err));
  }, []);

  const handleChange = (e) => {
    setTeacherData({ ...teacherData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Enregistrer les modifications sur le backend avec Axios
    axios.put("http://localhost:5000/api/teacher/profile", teacherData)
      .then((response) => {
        setTeacherData(response.data);
        setEditing(false);
      })
      .catch((err) => console.error("Erreur:", err));
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold mb-4">Profil Enseignant</h2>

      {editing ? (
        <>
          <div className="space-y-4">
            <div>
              <label className="block text-sm">Nom</label>
              <input
                type="text"
                name="nom"
                value={teacherData.nom}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={teacherData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Spécialité</label>
              <input
                type="text"
                name="specialite"
                value={teacherData.specialite}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block text-sm">Téléphone</label>
              <input
                type="text"
                name="phone"
                value={teacherData.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Enregistrer
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Annuler
            </button>
          </div>
        </>
      ) : (
        <div className="space-y-3 text-gray-700">
          <p><strong>Nom:</strong> {teacherData.nom || "Non défini"}</p>
          <p><strong>Email:</strong> {teacherData.email || "Non défini"}</p>
          <p><strong>Spécialité:</strong> {teacherData.specialite || "Non défini"}</p>
          <p><strong>Téléphone:</strong> {teacherData.phone || "Non défini"}</p>

          <button
            onClick={() => setEditing(true)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Modifier
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
