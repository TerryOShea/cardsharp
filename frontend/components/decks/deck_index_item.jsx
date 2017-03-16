import React from 'react';
import { Link } from 'react-router';

const progressRef = {
  '0': 'zero-fifths',
  '1': 'one-fifth',
  '2': 'two-fifths',
  '3': 'three-fifths',
  '4': 'four-fifths',
  '5': ''
}

const DeckIndexItem = ({ deck }) => {
  const catName = deck.category.split("_").join("-");
  const progressName = `progress ${progressRef[deck.mastery.toString()]}`;

  return (
    <li>
      <Link to={`decks/${deck.id}`} className={`deck-widget ${catName}`}>
        <section className={progressName}></section>
      </Link>
      {deck.title}
    </li>
  );
};

export default DeckIndexItem;
