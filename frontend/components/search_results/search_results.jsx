import React from 'react';
import { Link } from 'react-router';

class SearchResults extends React.Component {
  constructor() {
    super();
    this.state = { popularTags: [] }
  }

  componentDidMount() {
    this.props.fetchPopularTags().then(res => {
      this.setState({ popularTags: Object.keys(res).map(id => res[id]) });
    });
  }

  componentWillUnmount() {
    this.props.clearTagShow();
  }

  render() {
    const { tagName, resultDecks } = this.props;

    if (tagName) {
      let deckItems = (<li>No results found.</li>);

      if (Object.keys(resultDecks).length > 0) {
        deckItems = resultDecks.map(deck => (
          <li key={deck.id} className="search-result-item">
            <Link to={`/decks/${deck.id}`} className="search-result-title">{deck.title}</Link>
            <section className="search-result-info">
              <p>{deck.num_cards} Cards - {deck.num_subscribers} Learners</p>
              <p>Authored by {deck.authorName}</p>
            </section>
            <Link to={`/decks/${deck.id}`}><button>Check It Out</button></Link>
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

      const tagItems = this.state.popularTags.map(tag => (
        <li key={tag.id} className="tag-link" onClick={() => this.props.fetchTagShow(tag.name)}>{tag.name}</li>
      ));

      return (
        <div className="search-results">
          <h3 className="search-results-title">Browse Popular Subjects</h3>
          <ul>{tagItems}</ul>
        </div>
      );
    }
  }
}

export default SearchResults;
