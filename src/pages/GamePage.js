import React, { useContext, useEffect, useState, useCallback } from 'react';
import Timer from '../components/Timer';
import SettingsMenu from '../components/SettingsMenu';
import Card from '../components/Card';
import { GameContext } from '../context/GameContext';
import '../styles/GamePage.css';

const GamePage = () => {
  const {
    cards,
    flippedIndexes,
    matchedPairs,
    setFlippedIndexes,
    setMatchedPairs,
    setMoves,
    moves,
    time,
    setTime,
    setGameOver,
    initializeGame,
  } = useContext(GameContext);

  const [message, setMessage] = useState('');
  const [timeLimit, setTimeLimit] = useState(60);
  const [finalTime, setFinalTime] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#f4f4f4'); // Ajout de l'état pour le fond

  // Définition de la fonction saveGameHistory avant son utilisation
  const saveGameHistory = useCallback((result, time, moves) => {
    const history = JSON.parse(localStorage.getItem("gameHistory")) || [];
    const newHistory = [
      ...history,
      { 
        date: new Date().toLocaleString(),
        score: moves, 
        duration: `${time}s`, 
        result: result 
      },
    ];
    localStorage.setItem("gameHistory", JSON.stringify(newHistory));
  }, []);

  const handleCardClick = (index) => {
    if (
      flippedIndexes.length >= 2 ||
      flippedIndexes.includes(index) ||
      matchedPairs.includes(index)
    ) {
      return;
    }

    setFlippedIndexes((prev) => [...prev, index]);

    if (flippedIndexes.length === 1) {
      const firstIndex = flippedIndexes[0];
      const secondIndex = index;

      if (cards[firstIndex].emoji === cards[secondIndex].emoji) {
        setTimeout(() => {
          setMatchedPairs((prev) => [...prev, firstIndex, secondIndex]);
          setFlippedIndexes([]);
        }, 500);
      } else {
        setTimeout(() => {
          setFlippedIndexes([]);
        }, 1000);
      }

      setMoves((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (matchedPairs.length === cards.length && cards.length > 0) {
      setMessage(`Félicitations ! Vous avez gagné 🎉`);
      setFinalTime(time); // Capture the time when the game ends
      setGameOver(true); // Stop the game
      saveGameHistory("Gagné", time, moves); // Enregistrer dans l'historique
    } else if (time >= timeLimit && matchedPairs.length !== cards.length) {
      setMessage("Temps écoulé ! Vous avez perdu ⌛");
      setFinalTime(time); // Capture the time when the game ends
      setGameOver(true); // Stop the game
      saveGameHistory("Perdu", time, moves); // Enregistrer dans l'historique
    }
  }, [matchedPairs, time, cards.length, timeLimit, setTime, setGameOver, saveGameHistory, moves]);

  const resetGame = () => {
    setMessage('');
    setFinalTime(null);
    setTime(0);
    setGameOver(false);
    setBackgroundColor('#f4f4f4'); // Réinitialiser le fond
    initializeGame(cards.length); // Recommencer le jeu
  };

  useEffect(() => {
    if (cards.length === 0) {
      initializeGame(16); // Par défaut, initialise avec 16 cartes
    }
  }, [cards.length, initializeGame]);

  return (
    <div className="game-page" style={{ backgroundColor }}> {/* Appliquer la couleur de fond dynamique */}
      <aside>
        <SettingsMenu setTimeLimit={setTimeLimit} setBackgroundColor={setBackgroundColor} />
      </aside>
      <main className="game-area">
        <Timer />

        {/* Mouvements */}
        <p className="info-text">Mouvements : {moves}</p>

        {/* Message de victoire ou de défaite */}
        {message && (
          <div className="message">
            <p>
              {message}
              <br />
              Temps : {finalTime !== null ? `${finalTime}s` : 'Non disponible'}
            </p>
            <button onClick={resetGame}>Rejouer</button>
          </div>
        )}

        <div className="cards-grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              card={card}
              isFlipped={flippedIndexes.includes(index) || matchedPairs.includes(index)}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default GamePage;
