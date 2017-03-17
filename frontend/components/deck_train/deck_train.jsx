import React from 'react';
import TrainingSidebar from './training_sidebar';
import CardShowContainer from '../card_show/card_show_container';

class DeckTrain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cardShown: 0 };
  }

  componentDidMount() {
    this.props.fetchDeck();
  }

  componentWillUnmount() {
    // this.props.removeDeck();
  }

  render() {
    const { deck, cards } = this.props;
    const { cardShown } = this.state;
    const card = cards.length > 0 ? (<CardShowContainer card={cards[cardShown]} />) : "";

    return (
      <div className="deck-train-container">
        <TrainingSidebar deckTitle={deck.title} numCards={cards.length} numSeen={2} />
        {card}
      </div>
    );
  }
}

export default DeckTrain;
