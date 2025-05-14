import React from "react";
import FileUploaderWithProgress from "./FileUploaderWithProgress";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UploadSection = () => {
  const handleUploadComplete = (fileName) => {
    toast.success(`✅ Fichier "${fileName}" uploadé avec succès`);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">📁 Ajouter un Fichier</h2>
      <FileUploaderWithProgress onUploadComplete={handleUploadComplete} />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default UploadSection;
