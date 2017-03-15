import React from 'react';
import Card from '../card/card';
import AddCardContainer from '../add_card/add_card_container';

class Deck extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDeck();
  }

  render() {
    const { deck } = this.props;
    console.log(deck);

    let cardItems = "";

    if (deck.cards) {
      cardItems = deck.cards.map(card => (
        <Card key={card.id} card={card} />
      ));
    }

    return (
      <div>
        <ul className="cards-holder">{cardItems}</ul>
        <section className="card-trash"><i className="fa fa-trash"></i></section>
        <AddCardContainer />
      </div>
    )
  }
};

export default Deck;
