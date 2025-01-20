import React, { useContext } from 'react';
import '../styles/SettingsMenu.css';
import { GameContext } from '../context/GameContext';

const SettingsMenu = ({ setTimeLimit, timeLimit, setBackgroundColor }) => {
  const { initializeGame } = useContext(GameContext); // Récupérer initializeGame du contexte

  const handleGameModeChange = (size) => {
    initializeGame(size); // Appeler initializeGame avec la taille spécifiée
  };

  const handleTimeLimitChange = (event) => {
    const selectedLimit = parseInt(event.target.value, 10);
    setTimeLimit(selectedLimit);
  };

  const handleBackgroundChange = (color) => {
    setBackgroundColor(color); // Mettre à jour la couleur du fond
  };

  const resetGame = () => {
    initializeGame(16); // Réinitialiser avec 16 cartes par défaut
    setBackgroundColor('#f4f4f4'); // Réinitialiser la couleur du fond à sa couleur d'origine
  };

  return (
    <div className="settings-menu">
      <h3>Paramètres</h3>
      <button onClick={() => handleGameModeChange(4)}>Mode : 4 cartes</button>
      <button onClick={() => handleGameModeChange(16)}>Mode : 16 cartes</button>
      <button onClick={() => handleGameModeChange(32)}>Mode : 32 cartes</button>
      <div className="time-limit">
        <label>
          Temps limite :
          <select onChange={handleTimeLimitChange} value={timeLimit}>
            <option value={60}>60 secondes</option>
            <option value={120}>120 secondes</option>
            <option value={180}>180 secondes</option>
          </select>
        </label>
      </div>
      <div className="background-options">
        <h4>Choisir la couleur de fond :</h4>
        <button onClick={() => handleBackgroundChange('#f4f4f4')}>Réinitialiser</button>
        <button onClick={() => handleBackgroundChange('#dff0d8')}>Vert Clair</button>
        <button onClick={() => handleBackgroundChange('#f2dede')}>Rouge Clair</button>
        <button onClick={() => handleBackgroundChange('#d9edf7')}>Bleu Clair</button>
      </div>
      <button onClick={resetGame}>Réinitialiser le Jeu</button>
    </div>
  );
};

export default SettingsMenu;
