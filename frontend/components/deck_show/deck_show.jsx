import React from 'react';
import CardItemContainer from './card_item_container';
import AddCardContainer from '../add_card/add_card_container';
import TrashCardContainer from '../trash_card/trash_card_container';

class DeckShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.state = {
      formActivated: false,
      editingTitle: false,
      editingDescription: false,
      editingTags: false
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

  enableEdit(field) {
    return () => this.setState({ [`editing${field}`]: true });
  }

  disableEdit(field) {
    return () => {
      this.props.updateDeck(Object.assign({}, this.props.deck, this.state));
      this.setState({ [`editing${field}`]: false });
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { cards, deck, currentUser } = this.props;
    const { formActivated, editingTitle, editingDescription, editingTags, title, description } = this.state;
    const isOwner = currentUser && currentUser.id === deck.author_id;

    const cardItems = cards.map(card => (
      <CardItemContainer key={card.id} card={card} isOwner={isOwner} />
    ));

    const addCardBtnText = this.state.formActivated ? "-" : "+";
    const addCardBtn = isOwner ? (
      <button className="add-card-btn" onClick={this.toggleForm}>
        {addCardBtnText}
      </button>) : "";

    const editTitleBtn = isOwner ? (
      <button type="button" onClick={this.enableEdit('Title')}>
        {editingTitle ? "" : <i className="fa fa-edit"></i>}
      </button>
    ) : "";

    const editDescriptionBtn = isOwner ? (
      <button type="button" onClick={this.enableEdit('Description')}>
        {editingDescription ? "" : <i className="fa fa-edit"></i>}
      </button>
    ) : "";

    const trash = cards.length > 0 && isOwner ? (<TrashCardContainer />) : "";

    const isSubscribed = currentUser.subscribed_decks.includes(deck.id)

    const authorInfo = isOwner ? "My deck" : `Deck by ${deck.author_name}`
    const subscribeBtn = (isOwner || !currentUser.id) ? "" : (
      <button type="button">{isSubscribed ? "Unsubscribe" : "Subscribe"}</button>
    );

    const subscriberS = deck.num_subscribers === 1 ? "subscriber" : "subscribers";

    return (
      <div className="deck-show-container">
        <section className="deck-show-info">
          <section className="deck-show-info-left">
            <section className="deck-show-title">
              {editTitleBtn}
              <input
                type="text"
                value={title}
                onChange={this.update('title')}
                onBlur={this.disableEdit('Title')}
                disabled={!editingTitle || !isOwner}
                style={editingTitle ? { color: "red" } : {}} />
            </section>

            <section className="deck-show-description">
              {editDescriptionBtn}
              <textarea
                value={description}
                placeholder="(no description)"
                onChange={this.update('description')}
                onBlur={this.disableEdit('Description')}
                disabled={!editingDescription || !isOwner}
                style={editingDescription ? {color: "red"} : {}} />
            </section>
          </section>
          <section className="deck-show-info-right">
            <p>{authorInfo}</p>
            <p>{deck.num_subscribers} {subscriberS}</p>
            {subscribeBtn}
          </section>
        </section>

        <section className="cards-header">
          <h3>Cards ({deck.num_cards})&nbsp;
            {addCardBtn}
          </h3>
        </section>

        <AddCardContainer deckId={deck.id} active={formActivated} />

        <ul className="cards-holder">
          {cardItems}
        </ul>

        {trash}
      </div>
    )
  }
};

export default DeckShow;
