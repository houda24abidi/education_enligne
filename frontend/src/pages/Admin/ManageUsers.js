import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ManageUsers.css";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "Etudiant" });
  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showNoUserFound, setShowNoUserFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔁 Fetch users from backend
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (err) {
        setError("Erreur lors de la récupération des utilisateurs");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // 🔁 Input handler
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // ➕ Ajouter utilisateur
  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;

    try {
      const response = await axios.post("http://localhost:5000/api/users", newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: "", email: "", role: "Etudiant" });
      setError(null);
    } catch (err) {
      setError("Erreur lors de l'ajout de l'utilisateur");
    }
  };

  // ❌ Supprimer utilisateur
  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  const handleConfirmedDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${deleteId}`);
      setUsers(users.filter((u) => u._id !== deleteId));
      setError(null);
    } catch (err) {
      setError("Erreur lors de la suppression de l'utilisateur");
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setDeleteId(null);
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setShowNoUserFound(search && filteredUsers.length === 0);
  }, [search, filteredUsers]);

  return (
    <div className="manage-users">
      <h2>👥 Gestion des utilisateurs</h2>

      {loading && <p>Chargement des utilisateurs...</p>}
      {error && <p className="error">{error}</p>}

      <div className="top-actions">
        <input
          type="text"
          placeholder="🔍 Rechercher un utilisateur..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <form className="user-form" onSubmit={handleAddUser}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newUser.email}
          onChange={handleChange}
        />
        <select name="role" value={newUser.role} onChange={handleChange}>
          <option value="Etudiant">Etudiant</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Ajouter</button>
      </form>

      <div className="user-list">
        {filteredUsers.map((user) => (
          <div key={user._id} className="user-card">
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <span className={`badge ${user.role.toLowerCase()}`}>{user.role}</span>
            <button onClick={() => confirmDelete(user._id)}>🗑</button>


          </div>
        ))}
      </div>

      {showNoUserFound && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <p>⚠️ Aucun utilisateur trouvé avec ce nom.</p>
            <div className="confirm-actions">
              <button className="confirm-no" onClick={() => setShowNoUserFound(false)}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="modal-overlay">
          <div className="confirm-modal">
            <p>⚠️ Êtes-vous sûr de vouloir supprimer cet utilisateur ?</p>
            <div className="confirm-actions">
              <button className="confirm-yes" onClick={handleConfirmedDelete}>
                Oui
              </button>
              <button className="confirm-no" onClick={cancelDelete}>
                Non
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ManageUsers;
