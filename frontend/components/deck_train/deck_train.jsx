import React from 'react';
import TrainingSidebarContainer from './training_sidebar_container';
import CardShowContainer from '../card_show/card_show_container';

class DeckTrain extends React.Component {
  constructor(props) {
    super(props);
    this.nextCard = this.nextCard.bind(this);
    this.state = {
      cardShown: 0,
      reachedEnd: false
    };
  }

  componentDidMount() {
    this.props.fetchDeck();
  }

  nextCard() {
    let newState = { cardShown: this.state.cardShown += 1 };
    if (this.state.cardShown === this.props.cards.length - 1) {
      newState = { reachedEnd: true };
    }
    this.setState(newState);
  }

  render() {
    const { deck, cards } = this.props;
    const { cardShown } = this.state;
    const card = cards.length > 0 ? (
      <CardShowContainer card={cards[cardShown]} next={this.nextCard} />
    ) : "";
    const endOfDeck = this.state.reachedEnd ? (<div>reached end</div>) : "";

    return (
      <div className="deck-train-container">
        {endOfDeck}
        <TrainingSidebarContainer numCards={cards.length} numSeen={cardShown} />
        {card}
      </div>
    );
  }
}

export default DeckTrain;
