// src/components/StudentSidebar.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  Users,
  MessageSquare,
  Bell,
  Info,
  User,
  Video,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useMediaQuery } from "react-responsive";

const StudentSidebar = ({ toggleMenu, isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const isActive = (path) =>
    location.pathname === path ? "bg-indigo-700 text-white" : "text-gray-600";

  const closeSidebar = () => {
    if (isSmallScreen) setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Déconnexion de l'utilisateur
    closeSidebar(); // Fermer la barre latérale
    navigate("/"); // Rediriger vers la page d'accueil
  };

  return (
    <div>
      {/* Bouton menu mobile */}
      <div className="absolute top-4 z-10 ml-4">
        <button
          onClick={toggleMenu}
          className="bg-indigo-700 p-2 text-white rounded-md"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Overlay */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-gray-900 bg-opacity-50 z-20`}
        onClick={toggleMenu}
      />

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-64 bg-indigo-100 text-gray-600 h-full transform transition-transform duration-300 z-30`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold">Espace Étudiant</h1>
          <button onClick={toggleMenu} className="text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav>
          <ul className="space-y-4 p-2">
            <li>
              <Link
                to="/etudiant"
                onClick={closeSidebar}
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/etudiant"
                )}`}
              >
                <BookOpen className="w-5 h-5" />
                <span>Cours</span>
              </Link>
            </li>

            <li>
              <Link
                to="/etudiant/quiz"
                onClick={closeSidebar}
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/etudiant/quiz"
                )}`}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Quizze</span>
              </Link>
            </li>


            <li>
              <Link
                to="/etudiant/chat/:id"
                onClick={closeSidebar}
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/etudiant/chat/:id"
                )}`}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Messages</span>
              </Link>
            </li>

            <li>
              <Link
                to="/etudiant/flash-info"
                onClick={closeSidebar}
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/etudiant/flash-info"
                )}`}
              >
                <Info className="w-5 h-5" />
                <span>Flash Info</span>
              </Link>
            </li>

            <li>
              <Link
                to="/etudiant/profil"
                onClick={closeSidebar}
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/etudiant/profil"
                )}`}
              >
                <User className="w-5 h-5" />
                <span>Profil</span>
              </Link>
            </li>

            <li>
              <Link
                to="/etudiant/classe-direct"
                onClick={closeSidebar}
                className={`flex items-center space-x-2 p-2 rounded-lg ${isActive(
                  "/etudiant/classe-direct"
                )}`}
              >
                <Video className="w-5 h-5" />
                <span>Live Session</span>
              </Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 p-2 rounded-lg text-gray-600 w-full text-left hover:bg-red-100"
              >
                <LogOut className="w-5 h-5" />
                <span>Déconnexion</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default StudentSidebar;
