import React from 'react';
import DeckIndexItemContainer from './deck_index_item_container';

class Decks extends React.Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.state = { hide: [] };
  }

  deleteItem(idx) {
    this.setState({ hide: [...this.state.hide, idx] });
  }

  render() {
    const { hide } = this.state;
    const { decks } = this.props;

    const deckItems = decks.filter((deck, idx) => !hide.includes(idx)).map((deck, idx) => (
      <DeckIndexItemContainer key={deck.id} deck={deck} idx={idx} deleteItem={this.deleteItem} />
    ));

    return (
      <ul className="decks-container">{deckItems}</ul>
    );
  }
}

// const Decks = ({ decks }) => {
//   const deleteItem = idx => {
//     console.log(deckItems.length);
//     deckItems.splice(idx, 1);
//     console.log(deckItems.length);
//   };
//
//   const deckItems = decks.map((deck, idx) => (
//     <DeckIndexItemContainer key={deck.id} deck={deck} idx={idx} deleteItem={deleteItem} />
//   ));
//
//   return (
//     <ul className="decks-container">{deckItems}</ul>
//   );
// }

export default Decks;
