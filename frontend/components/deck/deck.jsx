import React from 'react';
import Card from '../card/card';
import AddCardContainer from '../add_card/add_card_container';
import TrashCardContainer from '../trash_card/trash_card_container';

class Deck extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDeck();
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

export default Deck;
