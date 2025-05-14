import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addChapter, getChaptersByCourseId, deleteChapter } from "../../../services/chapterService";
import FileUploader from "../components/FileUploader"; // Import correct

const ManageChapitres = () => {
  const { id: courseId } = useParams();
  const [title, setTitle] = useState("");
  const [chapters, setChapters] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null); // 👉 state pour fichier

  useEffect(() => {
    setChapters(getChaptersByCourseId(parseInt(courseId)));
  }, [courseId]);

  const handleAddChapter = (e) => {
    e.preventDefault();

    if (!uploadedFile) {
      alert("Veuillez uploader un fichier avant d'ajouter le chapitre !");
      return;
    }

    const newChapter = {
      id: Date.now(),
      title,
      courseId: parseInt(courseId),
      fileName: uploadedFile.name, // 👉 liée fichier au chapitre
    };
    addChapter(newChapter);

    setTitle("");
    setUploadedFile(null); // reset file après ajout
    setChapters(getChaptersByCourseId(parseInt(courseId)));
  };

  const handleDelete = (id) => {
    deleteChapter(id);
    setChapters(getChaptersByCourseId(parseInt(courseId)));
  };

  const handleFileUpload = (file) => {
    console.log("Fichier uploadé:", file.name);
    setUploadedFile(file); // 👉 stocker fichier fi state
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Chapitres</h2>

      {/* Formulaire ajout chapitre */}
      <form onSubmit={handleAddChapter} className="mb-6 space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titre du chapitre"
          className="border p-2 mr-2 w-full"
          required
        />

        {/* Upload fichier */}
        <div className="mb-4">
          <FileUploader onFileUpload={handleFileUpload} />
        </div>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Ajouter Chapitre
        </button>
      </form>

      {/* Liste des chapitres */}
      <ul className="space-y-4">
        {chapters.map((chap) => (
          <li key={chap.id} className="flex flex-col md:flex-row justify-between items-start md:items-center border p-4">
            <div>
              <div className="font-semibold">{chap.title}</div>
              {chap.fileName && (
                <div className="text-sm text-gray-600">
                  Fichier : {chap.fileName}
                </div>
              )}
            </div>
            <button
              onClick={() => handleDelete(chap.id)}
              className="bg-red-500 text-white p-2 rounded mt-2 md:mt-0"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageChapitres;
