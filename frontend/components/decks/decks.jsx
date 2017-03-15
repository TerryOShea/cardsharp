import React from 'react';
import { Link } from 'react-router';

const Decks = ({ decks }) => {
  const deckItems = decks.map(deck => {
    const catName = deck.category.split("_").join("-");
    return (
      <li key={deck.id}>
        <Link to={`decks/${deck.id}`} className={`deck-widget ${catName}`}>
          {deck.title}
        </Link>
      </li>
    );
  });

  return (
    <ul className="decks-container">{deckItems}</ul>
  );
}

export default Decks;
