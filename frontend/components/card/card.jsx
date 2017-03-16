import React from 'react';

const dragStart = e => {
  e.dataTransfer.setData("cardId", e.target.dataset.id);
};

const Card = ({ card }) => (
  <li className="card" data-id={card.id} draggable onDragStart={dragStart}>
    {card.side_a}
  </li>
);

export default Card;
