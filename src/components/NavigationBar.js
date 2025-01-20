import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <nav>
        <Link to="/">Jeu</Link>
        <Link to="/history">Historique</Link>
      </nav>
    </div>
  );
};

export default NavigationBar;
