import React from 'react';
import DeckIndexItemContainer from './deck_index_item_container';

const Decks = ({ decks }) => {
  const deckItems = decks.map(deck => (
    <DeckIndexItemContainer key={deck.id} deck={deck} />
  ));

  return (
    <ul className="decks-container">{deckItems}</ul>
  );
}

export default Decks;
