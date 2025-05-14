import React from 'react';
import { FaBell } from 'react-icons/fa';
import '../styles/Notification.css';
import { useNotification } from '../../../components/NotificationContext';

const NotificationList = () => {
  const { notifications } = useNotification();

  return (
    <div className="notification-wrapper">
      <div className="notification-icon">
        <FaBell size={24} />
        {notifications.length > 0 && <span className="notif-dot"></span>}
      </div>

      {notifications.length > 0 && (
        <div className="notification-container">
          {notifications.map((n, index) => (
            <div key={index} className="notification-item">
              <p><strong>{n.sender}</strong> a envoyé un message</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationList;
