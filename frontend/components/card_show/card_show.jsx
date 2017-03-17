import React from 'react';

const CardShow = ({ card }) => {
  return (
    <div className="card-show-container">
      <div className="card-show">{card.side_a}</div>
    </div>
  )
};

export default CardShow;
