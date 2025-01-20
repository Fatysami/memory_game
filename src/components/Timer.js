import React, { useEffect } from 'react';
import { useContext } from 'react';
import { GameContext } from '../context/GameContext';

const Timer = () => {
  const { time, setTime, gameOver } = useContext(GameContext);

  useEffect(() => {
    // Si le jeu est terminé, on arrête le timer
    if (gameOver || time === null) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1); // Incrémentation du temps
    }, 1000);

    // Nettoyage de l'intervalle lorsque le jeu est terminé ou lorsque le temps est null
    return () => clearInterval(interval);
  }, [time, gameOver, setTime]);

  return (
    <div className="timer">
      {gameOver ? 'Temps : Arrêté' : `Temps : ${time}s`} {/* Affichage du temps ou 'Arrêté' si terminé */}
    </div>
  );
};

export default Timer;
