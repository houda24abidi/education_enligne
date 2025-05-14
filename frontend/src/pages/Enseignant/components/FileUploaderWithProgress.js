// src/pages/Enseignant/components/FileUploaderWithProgress.js
import React, { useState } from 'react';

const FileUploaderWithProgress = () => {
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setProgress(0); // Reset progress
  };

  const handleUpload = () => {
    if (file) {
      setUploading(true);
      const fakeProgress = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(fakeProgress);
            setUploading(false);
            return 100;
          }
          return oldProgress + 10;
        });
      }, 300); // Progress every 300ms
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Uploader un Fichier</h2>
      <input type="file" onChange={handleFileChange} style={styles.input} />
      {file && <p style={styles.filename}>{file.name}</p>}
      <button onClick={handleUpload} style={styles.button} disabled={!file || uploading}>
        {uploading ? 'Téléchargement...' : 'Uploader'}
      </button>
      {uploading && (
        <div style={styles.progressContainer}>
          <div style={{ ...styles.progressBar, width: `${progress}%` }}></div>
        </div>
      )}
      {progress === 100 && <p style={styles.success}>Upload terminé ✅</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
  },
  input: {
    marginBottom: '10px',
  },
  filename: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
  },
  progressContainer: {
    width: '100%',
    height: '10px',
    backgroundColor: '#f0f0f0',
    borderRadius: '5px',
    overflow: 'hidden',
    marginTop: '10px',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#28a745',
    transition: 'width 0.3s',
  },
  success: {
    color: 'green',
    marginTop: '10px',
  },
};

export default FileUploaderWithProgress;
