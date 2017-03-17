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
    const { cards, deckId } = this.props;

    const cardItems = cards.map(card => (
      <Card key={card.id} card={card} />
    ));

    return (
      <div>
        <ul className="cards-holder">
          <li><AddCardContainer deckId={deckId} /></li>
          {cardItems}
        </ul>
        <TrashCardContainer />
      </div>
    )
  }
};

export default DeckShow;
