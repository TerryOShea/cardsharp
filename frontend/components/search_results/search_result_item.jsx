import React from 'react';
import { Link } from 'react-router';

const SearchResultItem = ({ deck, currentUser, createSubscription, deleteSubscription }) => {

  const isOwner = currentUser && currentUser.id === deck.author_id;
  const isSubscribed = currentUser && currentUser.subscribed_decks.includes(deck.id);

  const learnerS = deck.num_subscribers === 1 ? "Learner" : "Learners";
  const author = isOwner ? "(your deck)" : `Authored by ${deck.authorName}`

  let button;
  if (isSubscribed) {
    button = (
      <button className="unsubscribe-btn" onClick={() => deleteSubscription(deck.id)}>
        Unsubscribe
      </button>
    );
  } else if (!isOwner) {
    button = (
      <button onClick={() => createSubscription({ deck_id: deck.id })}>Subscribe</button>
    );
  } else {
    button = (<p></p>);
  }

  return (
    <li className="search-result-item">
      <Link to={`/decks/${deck.id}`} className="search-result-title">{deck.title}</Link>
      <section className="search-result-info">
        <p>{deck.num_cards} Cards - {deck.num_subscribers} {learnerS}</p>
        <p>{author}</p>
      </section>
      {button}
    </li>
  );
}

export default SearchResultItem;
