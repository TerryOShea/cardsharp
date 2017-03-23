import React from 'react';
import TrainingSidebarContainer from './training_sidebar_container';
import CardShowContainer from '../card_show/card_show_container';

const _defaultState = {
  cardShown: 0,
  reachedEnd: false
};

const shuffle = arr => {
  for (let i = arr.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [arr[i-1], arr[j]] = [arr[j], arr[i-1]];
  }
  return arr;
}

class DeckTrain extends React.Component {
  constructor(props) {
    super(props);
    this.nextCard = this.nextCard.bind(this);
    this.reset = this.reset.bind(this);
    this.state = Object.assign({}, _defaultState);
  }

  componentDidMount() {
    this.props.fetchDeck(parseInt(this.props.params.deckId))
      .then(() => this.setState({ cardOrder: shuffle([...Array(this.props.deck.num_cards).keys()]) }));
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
    const { cardShown, reachedEnd, cardOrder } = this.state;

    const card = cards.length > 0 && cardOrder ? (
      <CardShowContainer card={cards[cardOrder[cardShown]]} next={this.nextCard} />
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
