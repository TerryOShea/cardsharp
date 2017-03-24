import React from 'react';
import { Link } from 'react-router';

import CardItemContainer from './card_item_container';
import AddCardContainer from '../add_card/add_card_container';
import TrashCardContainer from '../trash_card/trash_card_container';
import AddTagContainer from '../add_deck/add_tag_container';

class DeckShow extends React.Component {
  constructor(props) {
    super(props);
    this.toggleForm = this.toggleForm.bind(this);
    this.addTagName = this.addTagName.bind(this);
    this.removeTagName = this.removeTagName.bind(this);
    this.state = {
      formActivated: false,
      editingTitle: false,
      editingDescription: false,
      editingTags: false,
      tag_names: []
    }
  }

  componentDidMount() {
    this.props.fetchDeck().then(() => {
      const { deck, tags } = this.props;
      this.setState({
        title: deck.title,
        description: deck.description,
        tag_names: tags.map(tagObj => tagObj.name)
      });
    });
  }

  addTagName(tagName) {
    this.setState({ tag_names: [...this.state.tag_names, tagName] });
  }

  removeTagName(tagName) {
    const newTagNames = [...this.state.tag_names];
    newTagNames.splice(newTagNames.indexOf(tagName), 1);
    this.setState({ tag_names: newTagNames });
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
    const { cards, deck, currentUser, createSubscription, deleteSubscription } = this.props;
    const { formActivated, editingTitle, editingDescription, editingTags, title, description } = this.state;
    const isOwner = currentUser && currentUser.id === deck.author_id;
    const isSubscribed = currentUser.subscribed_decks.includes(deck.id);

    const toProfileBtn = isOwner ? (
      <Link to="/profile">
        <button type="button" className="deck-show-profile-btn">
          <i className="fa fa-angle-left"></i> Back
        </button>
      </Link>
    ) : "";

    const editTitleBtn = isOwner ? (
      <button type="button" className="deck-show-edit-btn" onClick={this.enableEdit('Title')}>
        {editingTitle ? "" : <i className="fa fa-edit"></i>}
      </button>
    ) : "";

    const editDescriptionBtn = isOwner ? (
      <button type="button" className="deck-show-edit-btn" onClick={this.enableEdit('Description')}>
        {editingDescription ? "" : <i className="fa fa-edit"></i>}
      </button>
    ) : "";

    const editTagsBtn = isOwner ? (
      <button type="button" className="deck-show-edit-btn" onClick={this.enableEdit('Tags')}>
        {editingTags ? "" : <i className="fa fa-edit"></i>}
      </button>
    ) : "";

    const tagItems = this.state.tag_names.map((tag, i) => {
      const tagDeleteBtn = isOwner ?
        (<button type="button" className="remove-tag-btn" onClick={() => this.removeTagName(tag)}><i className="fa fa-close"></i></button>) :
        "";
      return (
        <li key={i}>
          {tagDeleteBtn}
          {tag}
        </li>
      );
    });

    const addTagsInput = editingTags ?
      <AddTagContainer addTag={this.addTagName} onBlur={this.disableEdit('Tags')} /> :
      "";

    const authorInfo = isOwner ? "My deck" : `Deck by ${deck.author_name}`

    let subscribeBtn = "";

    if (isSubscribed) {
      subscribeBtn = (<button type="button" onClick={() => deleteSubscription(deck.id)}>Unsubscribe</button>);
    } else if (!isOwner && !isSubscribed) {
      subscribeBtn = (<button type="button" onClick={() => createSubscription({ deck_id: deck.id })}>Subscribe</button>);
    }

    const trainBtn = (isOwner || isSubscribed) ?
      (<Link to={`/train/${deck.id}`}><button type="button">Train</button></Link>) : "";

    const subscriberS = deck.num_subscribers === 1 ? "subscriber" : "subscribers";

    const cardItems = cards.map(card => (
      <CardItemContainer key={card.id} card={card} isOwner={isOwner} />
    ));

    const addCardBtnText = this.state.formActivated ? "-" : "+";
    const addCardBtn = isOwner ? (
      <button className="add-card-btn" onClick={this.toggleForm}>
        {addCardBtnText}
      </button>) : "";

    const trash = cards.length > 0 && isOwner ? (<TrashCardContainer />) : "";

    return (
      <div className="deck-show-container">
        <section className="deck-show-info">
          <section className="deck-show-info-left">
            {toProfileBtn}

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

            <section className="deck-show-tags">
              <section className="deck-show-tag-line">
                {editTagsBtn}
                Tags: &nbsp;
                <ul className="tags-container">{tagItems}</ul>
              </section>
              {addTagsInput}
            </section>

          </section>
          <section className="deck-show-info-right">
            <p>{authorInfo}</p>
            <p>{deck.num_subscribers} {subscriberS}</p>
            {subscribeBtn}
            {trainBtn}
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
          {trash}
        </ul>

      </div>
    )
  }
};

export default DeckShow;
