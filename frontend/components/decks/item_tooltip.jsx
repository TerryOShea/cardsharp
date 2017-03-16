import React from 'react';
import { Link } from 'react-router';

const ItemTooltip = ({ deck, deleteDeck }) => {

  const handleClick = () => {
    console.log("here");
    // deleteDeck(deck.id);
  };

  let option;

  if (deck.mastery === 0) {
    option = (<button type="button" onClick={handleClick}>Delete</button>);
  } else {
    option = (<Link to="#">Train</Link>);
  }

  return (
    <div className="item-tooltip">
      <Link to={`decks/${deck.id}`}>Edit</Link>
      {option}
    </div>
  );
}


export default ItemTooltip;
