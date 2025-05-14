import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AmisPage.css';

const AmisPage = ({ amis }) => {
  return (
    <div className="amis-page">
      <h1>Mes Amis</h1>
      <div className="amis-list">
        {amis.map(ami => (
          <Link to={`/chat/${ami.id}`} key={ami.id} className="ami-link">
            <div className="ami-item">
              <img src={ami.profilePic} alt={ami.name} className="ami-profile-pic" />
              <span>{ami.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AmisPage;