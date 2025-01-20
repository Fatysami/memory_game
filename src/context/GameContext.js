import React, { createContext, useState, useEffect } from 'react';

// Créer le contexte
export const GameContext = createContext();

// Fournisseur du contexte
export const GameProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Initialiser le jeu avec les images chargées depuis le JSON
  const initializeGame = (size) => {
    fetch('/images.json')  // Charger le fichier JSON
      .then(response => response.json())
      .then(data => {
        const images = data.map(item => item.emoji);  // Extraire les chemins d'images
        const shuffledCards = [...images.slice(0, size / 2), ...images.slice(0, size / 2)]
          .sort(() => Math.random() - 0.5)
          .map((emoji) => ({
            emoji,
            id: Math.random(),
            imageUrl: `/images${emoji}`  // Assurez-vous que chaque carte a un URL d'image
          }));
        
        setCards(shuffledCards);
        setFlippedIndexes([]);
        setMatchedPairs([]);
        setMoves(0);
        setTime(0); // Réinitialiser le temps
        setGameOver(false); // Réinitialiser le statut du jeu
      })
      .catch(error => console.error('Erreur lors du chargement des images:', error));
  };

  useEffect(() => {
    initializeGame(16); // Initialiser le jeu avec 16 cartes par défaut
  }, []);

  return (
    <GameContext.Provider
      value={{
        cards,
        flippedIndexes,
        matchedPairs,
        moves,
        time,
        gameOver,
        setFlippedIndexes,
        setMatchedPairs,
        setMoves,
        setTime,
        setGameOver,
        initializeGame, // Assurez-vous de l'exportation de initializeGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
