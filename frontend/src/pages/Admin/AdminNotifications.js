import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './AdminNotifications.css'; // Assure-toi que ton CSS est bien importé

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  // Charger les notifications depuis l'API
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des notifications:', error);
      }
    };

    fetchNotifications();
  }, []);

  // Marquer une notification comme lue
  const markAsRead = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/notifications/mark-read/${id}`);
      setNotifications(notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      ));
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la notification:', error);
    }
  };

  // Supprimer une notification
  const deleteNotification = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notifications/delete/${id}`);
      setNotifications(notifications.filter(notification => notification._id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression de la notification:', error);
    }
  };

  return (
    <div className="admin-notifications">
      <h2>Notifications de l'Administrateur</h2>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id} className={notification.read ? 'read' : 'unread'}>
            <p>{notification.message}</p>
            <span className="timestamp">{notification.timestamp}</span>
            <button
              className="mark-read-btn"
              onClick={() => markAsRead(notification._id)}
            >
              {notification.read ? 'Lu' : 'Marquer comme lu'}
            </button>
            <button
              className="delete-btn"
              onClick={() => deleteNotification(notification._id)}
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminNotifications;
