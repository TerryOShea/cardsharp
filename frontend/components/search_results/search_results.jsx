import React from 'react';
import { Link } from 'react-router';

const SearchResults = ({ tagName, resultDecks }) => {

  if (tagName) {
    let deckItems = (<li>No results found.</li>);

    if (Object.keys(resultDecks).length > 0) {
      deckItems = resultDecks.map(deck => (
        <li key={deck.id} className="search-result-item">
          <p className="search-result-title">{deck.title}</p>
          <section className="search-result-info">
            <p>{deck.numCards} Cards - {0} Learners</p>
            <p>Authored by <Link to="user_somewhere">{deck.authorName}</Link></p>
          </section>
          <Link to={`/somewhere`}><button>Check It Out</button></Link>
        </li>
      ));
    }

    return (
      <div className="search-results">
        <h3 className="search-results-title">{tagName} Decks Ranked by Popularity</h3>
        <ul className="search-results-list">{deckItems}</ul>
      </div>
    );
  } else {
    return (
      <div>results go here</div>
    );
  }
}

export default SearchResults;
