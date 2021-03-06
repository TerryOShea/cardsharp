import React from 'react';
import { Link } from 'react-router';

const COLOR_REF = {
  "0": "",
  "1": "mastery-purple",
  "2": "mastery-coral",
  "3": "mastery-yellow",
  "4": "mastery-seagreen",
  "5": "mastery-blue"
}

const DeckIndexItem = ({ deck, deleteDeck, deleteSubscription, currentUser, idx, deleteItem }) => {
  const isOwner = deck.author_id === currentUser.id;

  let itemName;
  if (deck.num_cards === 0) {
    itemName = [(<div className="disabled-item-name" key="1">{deck.title}</div>)];
    if (isOwner) {
      itemName.push(<p key="2"><Link to={`/decks/${deck.id}`}>add cards</Link></p>);
    } else {
      itemName.push(<p key="2">Cards: 0</p>);
    }
  } else {
    itemName = [
      (<Link to={`/train/${deck.id}`} key="1">{deck.title}</Link>),
      (<p key="2">Cards: {deck.num_cards}</p>)
    ];
  }

  const masteryClass = deck.numCards === 0 ?
    "" :
    ` ${COLOR_REF[Math.floor(deck.mastery/20).toString()]}`;

  const editBtn = isOwner ? (
    <Link to={`/decks/${deck.id}`}>
      <button type="button"><i className="fa fa-edit"></i></button>
    </Link>) : "";

  const deleteBtn = isOwner ? (
    <button type="button" onClick={() => deleteDeck(deck.id).then(() => deleteItem(idx))}>
      <i className="fa fa-trash"></i>
    </button>
  ) : (
    <button type="button" onClick={() => {
      deleteSubscription(deck.id).then(() => deleteItem(idx));
    }}>Unsubscribe</button>
  );

  return (
    <li className="deck-item">
      <p className={`deck-item-mastery${masteryClass}`}>{deck.mastery}%</p>

      <section className="deck-item-name">
        {itemName}
      </section>

      <section className="deck-item-btns">
        {editBtn}
        {deleteBtn}
      </section>
    </li>
  );
}

export default DeckIndexItem;
