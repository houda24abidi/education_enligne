import React from "react";

const FileUploader = ({ onFileUpload }) => {
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleChange}
        className="border p-2"
        accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.jpg,.png,.mp4" // accept extensions
      />
    </div>
  );
};

export default FileUploader;
