import React, { useEffect } from 'react';
import './Notification.css'; // Assurez-vous de créer un fichier CSS pour le style

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Fermer la notification après 3 secondes
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="notification-container">
      <div className="notification">
        <p>{message}</p>
        <button onClick={onClose} className="close-btn">X</button>
      </div>
    </div>
  );
};

export default Notification;
