import React from "react";

function StudentNavbar({ isSmallScreen }) {
  return (
    <div className="bg-indigo-100 text-gray-600 p-6 flex items-center justify-between">
      {/* Section Titre avec davantage d'espacement à gauche */}
      <div className="text-2xl font-semibold ml-12">
        <div>
          <span className="font-extrabold text-indigo-700">E</span>duNova{" "}
        </div>
      </div>

      {/* Actions visibles sur grands écrans avec plus d'espacement */}
      <div
        className={`${
          isSmallScreen ? "hidden" : "flex"
        } items-center space-x-8`} // Augmenter l'espacement entre les boutons
      >
        

      </div>
    </div>
  );
}

export default StudentNavbar;
