import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import StudentSidebar from "../components/StudentSidebar"; // créé en dessous
import StudenNavbar from "../components/Navbar/StudenNavbar";
import { useMediaQuery } from "react-responsive";

const EnseignantLayout = () => {
  const [isOpen, setIsOpen] = useState(false); // menu mobile
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      <StudentSidebar toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 flex flex-col">
        <StudenNavbar toggleMenu={toggleMenu} isSmallScreen={isSmallScreen} />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EnseignantLayout;
