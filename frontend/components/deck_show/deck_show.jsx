import React from 'react';
import CardItemContainer from './card_item_container';
import AddCardContainer from '../add_card/add_card_container';
import TrashCardContainer from '../trash_card/trash_card_container';

class DeckShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.state = {
      formActivated: false,
      editEnabled: false
    }
  }

  componentDidMount() {
    this.props.fetchDeck().then(() => {
      const { deck } = this.props;
      this.setState({ title: deck.title, description: deck.description });
    });
  }

  componentWillUnmount() {
    this.props.removeDeck();
  }

  toggleForm() {
    this.setState({ formActivated: !this.state.formActivated });
  }

  toggleEdit() {
    if (this.state.editEnabled) {
      this.props.updateDeck(Object.assign({}, this.props.deck, this.state));
    }

    this.setState({ editEnabled: !this.state.editEnabled });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { cards, deck } = this.props;
    const { formActivated, editEnabled, title, description } = this.state;

    console.log(deck.description);

    const cardItems = cards.map(card => (
      <CardItemContainer key={card.id} card={card} />
    ));

    const addCardBtnText = this.state.formActivated ? "-" : "+";

    const titleIcon = this.state.editEnabled ? "unlock" : "lock";
    const infoStyle = this.state.editEnabled ? { color: "red" } : {};

    return (
      <div className="deck-show-container">
        <section className="deck-show-info">
          <input
            type="text"
            value={title}
            onChange={this.update('title')}
            disabled={!editEnabled}
            style={infoStyle} />

          <textarea
            value={description}
            placeholder="(no description)"
            onChange={this.update('description')}
            disabled={!editEnabled}
            style={infoStyle} />

          <button type="button" onClick={this.toggleEdit}>
            <i className={`fa fa-${titleIcon}`}></i>
          </button>
        </section>

        <section className="cards-header">
          <h3>Cards&nbsp;
            <button className="add-card-btn" onClick={this.toggleForm}>
              {addCardBtnText}
            </button>
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
