import React from 'react';
import TrainingSidebarContainer from './training_sidebar_container';
import CardShowContainer from '../card_show/card_show_container';

const _defaultState = {
  cardShown: 0,
  reachedEnd: false
};

class DeckTrain extends React.Component {
  constructor(props) {
    super(props);
    this.nextCard = this.nextCard.bind(this);
    this.reset = this.reset.bind(this);
    this.state = Object.assign({}, _defaultState);
  }

  componentDidMount() {
    this.props.fetchDeck(parseInt(this.props.params.deckId));
  }

  nextCard() {
    let nextState = { cardShown: this.state.cardShown + 1 };
    if (nextState.cardShown === this.props.cards.length) {
      nextState = { cardShown: 0, reachedEnd: true };
    }

    this.setState(nextState);
  }

  reset() {
    this.setState(Object.assign({}, _defaultState));
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
          full={reachedEnd}
          reset={this.reset} />
        {card}
      </div>
    );
  }
}

export default DeckTrain;
