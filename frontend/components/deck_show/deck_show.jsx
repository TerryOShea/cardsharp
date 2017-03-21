import React from 'react';
import Card from './card';
import AddCardContainer from '../add_card/add_card_container';
import TrashCardContainer from '../trash_card/trash_card_container';

class DeckShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDeck();
  }

  componentWillUnmount() {
    this.props.removeDeck();
  }

  render() {
    const { cards, deck } = this.props;

    const cardItems = cards.map(card => (
      <Card key={card.id} card={card} />
    ));

    // <li><AddCardContainer deckId={deck.id} /></li>

    return (
      <div className="deck-show-container">
        <div className="title-box">
          <input type="text" value={deck.title} />
          <button type="button"><i className="fa fa-cog"></i></button>
        </div>
        <div className="cards-header">
          <h3>Cards</h3>
          <button>+</button>
        </div>
        <ul className="cards-holder">
          {cardItems}
        </ul>
        <TrashCardContainer />
      </div>
    )
  }
};

export default DeckShow;
