import React from 'react';
import { Link } from 'react-router';
import SearchResultItemContainer from './search_result_item_container';

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
    const { tagName, resultDecks, currentUser } = this.props;

    if (tagName) {
      let deckItems = (<li>No results found.</li>);

      if (Object.keys(resultDecks).length > 0) {
        deckItems = resultDecks.map(deck => {
          return (<SearchResultItemContainer key={deck.id} deck={deck} />);
        });
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
