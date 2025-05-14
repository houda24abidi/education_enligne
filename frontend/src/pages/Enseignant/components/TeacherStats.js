import React from "react";
import "../styles/TeacherStats.css";

const TeacherStats = () => {
  // Statistiques statiques (exemple)
  const stats = {
    totalStudents: 52,
    avgGrade: "13.4",
    activeCourses: 5,
    pendingQuizzes: 2,
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-blue-900">📊 Statistiques générales</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-blue-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
          <p className="text-gray-600">Étudiants inscrits</p>
          <h3 className="text-2xl font-bold text-blue-900">{stats.totalStudents}</h3>
        </div>

        <div className="bg-green-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
          <p className="text-gray-600">Moyenne des notes</p>
          <h3 className="text-2xl font-bold text-green-900">{stats.avgGrade}</h3>
        </div>

        <div className="bg-yellow-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
          <p className="text-gray-600">Cours actifs</p>
          <h3 className="text-2xl font-bold text-yellow-900">{stats.activeCourses}</h3>
        </div>

        <div className="bg-red-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
          <p className="text-gray-600">Quizz en attente</p>
          <h3 className="text-2xl font-bold text-red-900">{stats.pendingQuizzes}</h3>
        </div>
      </div>
    </div>
  );
};

export default TeacherStats;
