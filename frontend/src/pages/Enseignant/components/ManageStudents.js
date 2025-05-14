import React, { useState } from 'react';
import "../styles/ManageStudents.css";

const ManageStudents = () => {
  const [students, setStudents] = useState([
    { name: 'Ahmed', note: 15.5 },
    { name: 'Salma', note: 13.7 },
    { name: 'Karim', note: 18.2 },
    { name: 'Lina', note: 14.0 },
  ]);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [newStudent, setNewStudent] = useState({ name: "", note: "" });

  const handleDelete = (index) => {
    const updated = [...students];
    updated.splice(index, 1);
    setStudents(updated);
  };

  const handleEditNote = (index, newNote) => {
    const updated = [...students];
    updated[index].note = parseFloat(newNote);
    setStudents(updated);
  };

  const handleAddStudent = () => {
    if (!newStudent.name || isNaN(newStudent.note)) return;
    setStudents([...students, { ...newStudent, note: parseFloat(newStudent.note) }]);
    setNewStudent({ name: "", note: "" });
  };

  const filteredStudents = students
    .filter(s => s.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sortAsc ? a.note - b.note : b.note - a.note);

  return (
    <div className="manage-students-container">
      <h1 className="title">Liste des Étudiants</h1>

      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Rechercher un nom"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSortAsc(!sortAsc)}>
          Trier par Note {sortAsc ? "⬆️" : "⬇️"}
        </button>
      </div>

      <table className="students-table">
        <thead className="table-header">
          <tr>
            <th>Nom</th>
            <th>Note</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s, i) => (
            <tr key={i}>
              <td>{s.name}</td>
              <td>
                <input
                  type="number"
                  value={s.note}
                  onChange={(e) => handleEditNote(i, e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(i)}>🗑️ Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Ajouter un Étudiant</h3>
      <div className="add-student-form">
        <input
          type="text"
          placeholder="Nom"
          value={newStudent.name}
          onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Note"
          value={newStudent.note}
          onChange={(e) => setNewStudent({ ...newStudent, note: e.target.value })}
        />
        <button onClick={handleAddStudent}>➕ Ajouter</button>
      </div>
    </div>
  );
};

export default ManageStudents;
