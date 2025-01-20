import React, { useEffect, useState } from 'react';
import '../styles/HistoryPage.css';

const HistoryPage = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('gameHistory')) || [];
    setHistory(savedHistory);
  }, []);

  return (
    <div className="history-page">
      <h2>Historique des Parties</h2>
      <ul>
        {history.map((entry, index) => (
          <li key={index}>
            <p>Date : {entry.date}</p>
            <p>Nombre de mouvement : {entry.score}</p>
            <p>Durée : {entry.duration}</p>
            <p>Résultat : {entry.result}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
