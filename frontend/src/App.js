import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


// Layouts
import VisitorLayout from "./layouts/VisitorLayout";
import AdminLayout from "./layouts/AdminLayout";
import StudentLayout from "./layouts/StudentLayout";
import EnseignantLayout from './layouts/EnseignantLayout';

// Pages for Visitors
import Home from "./pages/Visitor/Home";
import APropos from "./pages/Visitor/APropos";
import Communaute from "./pages/Visitor/Communaute/Communaute";
import ForumDetail from "./pages/Visitor/Communaute/ForumDetail";
import Connexion from "./components/Visitor/Compte/Connexion";
import Inscription from "./components/Visitor/Compte/Inscription";
import GroupeDetails from "./pages/Visitor/Communaute/GroupeDetails";
import NotFound from "./pages/Visitor/NotFound";

import Commencer from './pages/Commencer';


// Pages for Admins
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageCourses from "./pages/Admin/ManageCourses";
import ManageUsers from "./pages/Admin/ManageUsers";
import Reports from "./pages/Admin/Reports";
import AdminSettings from "./pages/Admin/AdminSettings";
import AdminProject from "./pages/Admin/AdminProject";
import AdminProfile from "./pages/Admin/AdminProfile"; 
import AdminNotifications from "./pages/Admin/AdminNotifications";



// Pages for Etudiant
import Dashboard from "./pages/Etudiant/components/Dashboard";
import AmisPage from "./pages/Etudiant/components/AmisPage";
import Chat from "./pages/Etudiant/components/Chat";
import ChapitreList from "./pages/Etudiant/components/ChapitreList";
import CoursDetail from "./pages/Etudiant/components/CoursDetail";
import StudentQuiz from "./pages/Etudiant/components/StudentQuiz";
import ChapitreDetail from "./pages/Etudiant/components/ChapitreDetail";
import NotificationList from './pages/Etudiant/components/NotificationList';
import FlashInfo from './pages/Etudiant/components/FlashInfo';
import { NotificationProvider } from './components/NotificationContext';
import StudentProfile from './pages/Etudiant/components/StudentProfile';
import LiveSession from "./pages/Etudiant/components/LiveSession";






// Pages for Enseignant
import TeacherDashboard from "./pages/Enseignant/components/TeacherDashboard";
import TeacherManageCourses from "./pages/Enseignant/components/TeacherManageCourses";
import ManageChapitres from "./pages/Enseignant/components/ManageChapitres";
import ManageStudents from "./pages/Enseignant/components/ManageStudents";
import Notifications from "./pages/Enseignant/components/Notifications";
import QuizzesAssignments from "./pages/Enseignant/components/QuizzesAssignments";
import TeacherStats from "./pages/Enseignant/components/TeacherStats";
import ProfilePage from "./pages/Enseignant/components/ProfilePage";
import AddCourseForm from "./pages/Enseignant/components/AddCourseForm";
import AjoutFichier from "./pages/Enseignant/components/AjoutFichier";
import LiveClass from "./pages/Enseignant/components/LiveClass";







// PrivateRoute component
const PrivateRoute = ({ children, role }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) return <Navigate to="/" />;

  let userRoles;
  try {
    userRoles = JSON.parse(localStorage.getItem("userRole")) || [];
  } catch (e) {
    const fallbackRole = localStorage.getItem("userRole");
    userRoles = fallbackRole ? [fallbackRole] : [];
  }

  if (role && !userRoles.includes(role)) return <Navigate to="/" />;

  return children;
};

const App = () => {
  // Simuler login avec 2 rôles
  localStorage.getItem("userRole") // لازم تكون ["enseignant"]

  localStorage.setItem("userRole", JSON.stringify(["admin", "etudiant", 'enseignant']));
  localStorage.setItem("isLoggedIn", true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const amisData = [
    { id: 1, name: "Ami 1", profilePic: "/images/ami1.jpg" },
    { id: 2, name: "Ami 2", profilePic: "/images/ami2.jpg" },
    { id: 3, name: "Ami 3", profilePic: "/images/ami3.jpg" },
  ];
  

  return (
    <Router>
      <NotificationProvider>
        <Routes>
          {/* Visitor Routes */}
          <Route path="/" element={<VisitorLayout />}>
            <Route index element={<Home />} />
            <Route path="communaute" element={<Communaute />} />
            <Route path="communaute/forum/:forumId" element={<ForumDetail />} />
            <Route path="communaute/groupes/:id" element={<GroupeDetails />} />
            <Route path="about" element={<APropos />} />
            <Route path="connexion" element={<Connexion />} />
            <Route path="inscription" element={<Inscription />} />
            <Route path="/commencer" element={<Commencer />} />

          </Route>

          {/* Admin Routes */}
          <Route
  path="/admin"
  element={
    <PrivateRoute role="admin">
      <AdminLayout />
    </PrivateRoute>
  }
>
  <Route index element={<AdminDashboard />} />
  <Route path="manage-courses" element={<ManageCourses />} />
  <Route path="manage-users" element={<ManageUsers />} />
  <Route path="reports" element={<Reports />} />
  <Route path="projects" element={<AdminProject />} />
  <Route path="settings" element={<AdminSettings />} />
  <Route path="profil" element={<AdminProfile />} /> 
  < Route path="/admin/notifications" element={<AdminNotifications />} />

</Route>

          {/* Etudiant Routes */}
          <Route
            path="/etudiant"
            element={
              <PrivateRoute role="etudiant">
                <StudentLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="amis" element={<AmisPage amis={amisData} />} />
            <Route path="chat/:id" element={<Chat amis={amisData} />} />
            <Route path="cours" element={<CoursDetail />} />
            <Route path="mes-chapitres" element={<ChapitreList />} />          // ✅ Correct
            <Route path="chapitre-detail/:id" element={<ChapitreDetail />} />
            <Route path="quiz" element={<StudentQuiz />} />
            <Route path="flash-info" element={<FlashInfo />} />
            <Route path="notifications" element={<NotificationList />} />
            <Route path="profil" element={<StudentProfile />} />
            <Route path="classe-direct" element={<LiveSession />} />
            <Route path="quiz" element={<StudentProfile />} />




          </Route>
          <Route
  path="/enseignant"
  element={
    <PrivateRoute role="enseignant">
      <EnseignantLayout />
    </PrivateRoute>
  }
>
  <Route index element={<TeacherDashboard />} />
  <Route path="cours" element={<TeacherManageCourses />} />
  <Route path="chapitres" element={<ManageChapitres />} />
  <Route path="etudiants" element={<ManageStudents />} />
  <Route path="quizz" element={<QuizzesAssignments />} />
  <Route path="notifications" element={<Notifications />} />
  <Route path="statistiques" element={<TeacherStats />} />
  <Route path="profil" element={<ProfilePage />} />
  <Route path="ajouter-cours" element={<AddCourseForm />} />
  <Route path="ajout-fichier" element={<AjoutFichier />} />
  <Route path="classe-direct" element={<LiveClass />} />

 
</Route>
          

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NotificationProvider>
    </Router>
  );
};

export default App;
