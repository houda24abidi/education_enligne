import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    photo: '',
  });

  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const studentId = '663d4fc0576e78d9fa92c9a7'; // Remplace ceci par l'ID réel ou dynamique (depuis le login par exemple)

  const getStudentProfile = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/students/${studentId}/profile`);
      setProfile(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération du profil étudiant :', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudentProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      axios.get(`http://localhost:5000/api/students/${studentId}/profile`)
      setShowEditModal(false);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil étudiant :', error);
    }
  };

  if (loading) {
    return <div className="text-center py-10">Chargement du profil...</div>;
  }

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Mon Profil</h2>
      <div className="flex flex-col items-center">
        <img
          src={profile.photo || "/images/default-profile.jpg"}
          alt="Profil"
          className="w-32 h-32 rounded-full object-cover border"
        />
        <div className="mt-4 text-left w-full space-y-2">
          <p><strong>Nom:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Téléphone:</strong> {profile.phone}</p>
          <p><strong>Niveau:</strong> {profile.level}</p>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => setShowEditModal(true)}
        >
          Modifier
        </button>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96 relative">
            <h3 className="text-lg font-semibold mb-4">Modifier Mes Informations</h3>

            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={profile.name}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Téléphone"
              value={profile.phone}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              name="level"
              placeholder="Niveau"
              value={profile.level}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            />
            <input
              type="text"
              name="photo"
              placeholder="Lien de la photo"
              value={profile.photo}
              onChange={handleChange}
              className="w-full p-2 mb-4 border rounded"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Enregistrer
              </button>
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
