import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  ClipboardListIcon,
  Info,
  LogIn,
} from "lucide-react";

const VisitorNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = window.location.pathname;

  const menuItems = [
    { title: "Accueil", icon: <Home size={20} />, href: "/" },
    { title: "Communauté", icon: <Users size={20} />, href: "/communaute" },
    { title: "À Propos", icon: <Info size={20} />, href: "/about" },
    // Connexion supprimé ici
  ];

  const isActive = (href) => {
    if (href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(href);
  };

  const renderMenuItems = (isMobile = false) => {
    return menuItems.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
          isActive(item.href)
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 hover:bg-gray-100"
        } ${isMobile ? "block w-full" : ""}`}
      >
        {item.icon}
        <span>{item.title}</span>
      </a>
    ));
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 mr-4">
            <ClipboardListIcon className="h-8 w-8 text-indigo-100" />
            <span className="text-xl font-bold text-blue-600 whitespace-nowrap">
            EduNet
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {renderMenuItems()}
            <a
              href="/Connexion"
              className="bg-green-500 text-blue-600 flex items-center space-x-1 px-4 py-2 rounded-md"
            >
              <LogIn size={20} />
              <span>Connexion</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {renderMenuItems(true)}
            <a
              href="/Connexion"
              className="w-full bg-green-500 text-blue-600 flex items-center justify-center space-x-1 px-4 py-2 rounded-md"
            >
              <LogIn size={20} />
              <span>Connexion</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default VisitorNavbar;
