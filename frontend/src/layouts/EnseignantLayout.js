import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import EnseignantSidebar from "../components/EnseignantSidebar"; // créé en dessous
import StudentNavbar from "../components/Navbar/StudentNavbar";
import { useMediaQuery } from "react-responsive";

const EnseignantLayout = () => {
  const [isOpen, setIsOpen] = useState(false); // menu mobile
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex h-screen bg-gray-50">
      <EnseignantSidebar toggleMenu={toggleMenu} isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 flex flex-col">
        <StudentNavbar toggleMenu={toggleMenu} isSmallScreen={isSmallScreen} />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default EnseignantLayout;
