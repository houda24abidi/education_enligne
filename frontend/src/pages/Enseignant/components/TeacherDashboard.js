import React, { useEffect, useState } from 'react';
import "../styles/TeacherDashboard.css";

const TeacherDashboard = () => {
  const [studentsCount, setStudentsCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);
  const [avgNote, setAvgNote] = useState(0);
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    // Fetch students & courses from localStorage
    const students = JSON.parse(localStorage.getItem("students")) || [];
    const courses = JSON.parse(localStorage.getItem("courses")) || [];

    setStudentsCount(students.length);
    setCoursesCount(courses.length);

    // Calculate average notes
    const allNotes = students.map((s) => s.note).filter(n => !isNaN(n));
    const avg = allNotes.length
      ? (allNotes.reduce((a, b) => a + b, 0) / allNotes.length).toFixed(2)
      : 0;
    setAvgNote(avg);

    // Fake notifications (you can replace with real one)
    const notif = JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(notif.length);
  }, []);

  const stats = [
    { title: 'Total Étudiants', value: studentsCount },
    { title: 'Cours', value: coursesCount },
    { title: 'Moyenne Notes', value: `${avgNote} / 20` },
    { title: 'Notifications', value: notifications },
  ];

  return (
    <div className="teacher-dashboard-container">
      <h1 className="teacher-dashboard-title">Tableau de Bord 👨‍🏫</h1>
      <div className="teacher-dashboard-grid">
        {stats.map((s, i) => (
          <div key={i} className="teacher-dashboard-card">
            <h2 className="teacher-dashboard-card-title">{s.title}</h2>
            <p className="teacher-dashboard-card-value">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
