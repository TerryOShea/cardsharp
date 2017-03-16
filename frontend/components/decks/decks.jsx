import React from 'react';
import DeckIndexItem from './deck_index_item';

const Decks = ({ decks }) => {
  const deckItems = decks.map(deck => (
    <DeckIndexItem key={deck.id} deck={deck} />
  ));

  return (
    <ul className="decks-container">{deckItems}</ul>
  );
}

export default Decks;
