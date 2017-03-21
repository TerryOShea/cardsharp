import React from 'react';
import CardItemContainer from './card_item_container';
import AddCardContainer from '../add_card/add_card_container';
import TrashCardContainer from '../trash_card/trash_card_container';

class DeckShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.state = { formActivated: false }
  }

  componentDidMount() {
    this.props.fetchDeck();
  }

  componentWillUnmount() {
    this.props.removeDeck();
  }

  toggleForm() {
    this.setState({ formActivated: !this.state.formActivated });
  }

  render() {
    const { cards, deck } = this.props;
    const { formActivated } = this.state;

    const cardItems = cards.map(card => (
      <CardItemContainer key={card.id} card={card} />
    ));

    return (
      <div className="deck-show-container">
        <section className="deck-show-title">
          <input type="text" value={deck.title} />
          <button type="button"><i className="fa fa-cog"></i></button>
        </section>

        <section className="cards-header">
          <h3>Cards&nbsp;
            <button className="add-card-btn" onClick={this.toggleForm}>+</button>
          </h3>
        </section>

        <AddCardContainer deckId={deck.id} active={formActivated} />

        <ul className="cards-holder">
          {cardItems}
        </ul>
        <TrashCardContainer />
      </div>
    )
  }
};

export default DeckShow;
