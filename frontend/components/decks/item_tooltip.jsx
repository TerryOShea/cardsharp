import React from 'react';
import { Link } from 'react-router';

const ItemTooltip = ({ deck, deleteDeck }) => {

  const handleClick = () => {
    deleteDeck(deck.id);
  };

  let option, masteryText;

  if (deck.mastery === 0) {
    option = (<button type="button" onClick={handleClick}>Delete</button>);
    masteryText = "";
  } else {
    option = (<Link to={`/train/${deck.id}`}>Train</Link>);
    masteryText = (<p><span className="tooltip-mastery">{`${deck.mastery * 20}%`}</span> mastery</p>);
  }

  return (
    <div className="item-tooltip">
      {masteryText}
      <div className="tooltip-options">
        <Link to={`decks/${deck.id}`}>Edit</Link>
        &nbsp;|&nbsp;
        {option}
      </div>
    </div>
  );
}


export default ItemTooltip;
