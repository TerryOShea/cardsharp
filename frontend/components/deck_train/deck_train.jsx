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
    let nextState = { cardShown: this.state.cardShown + 1 };
    if (nextState.cardShown === this.props.cards.length) {
      nextState = { cardShown: 0, reachedEnd: true };
    }

    this.setState(nextState);
  }

  render() {
    const { deck, cards } = this.props;
    const { cardShown, reachedEnd } = this.state;

    const card = cards.length > 0 ? (
      <CardShowContainer card={cards[cardShown]} next={this.nextCard} />
    ) : "";

    return (
      <div className="deck-train-container">
        <TrainingSidebarContainer
          numCards={cards.length}
          numSeen={cardShown}
          full={reachedEnd} />
        {card}
      </div>
    );
  }
}

export default DeckTrain;
