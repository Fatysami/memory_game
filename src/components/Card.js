import React from 'react';
import '../styles/Card.css';

const Card = ({ card, isFlipped, onClick }) => {
  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">?</div>
        <div className="card-back">
          {isFlipped ? (
            <img src={card.emoji} alt="fruit" className="card-image" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
