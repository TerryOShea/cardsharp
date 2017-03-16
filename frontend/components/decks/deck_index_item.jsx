import React from 'react';
import { Link } from 'react-router';

const DeckIndexItem = ({ deck }) => {
  const catName = deck.category.split("_").join("-");
  return (
    <li>
      <Link to={`decks/${deck.id}`} className={`deck-widget ${catName}`}>
        {deck.title}
      </Link>
    </li>
  );
};

export default DeckIndexItem;
