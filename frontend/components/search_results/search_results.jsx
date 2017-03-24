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
    const { tagName, resultDecks, currentUser, clearTagShow } = this.props;

    if (tagName) {
      let deckItems = (<li>No results found.</li>);

      if (Object.keys(resultDecks).length > 0) {
        deckItems = resultDecks.map(deck => {
          return (<SearchResultItemContainer key={deck.id} deck={deck} />);
        });
      }

      return (
        <section className="search-results-box">
          <a className="search-results-header" onClick={clearTagShow}><i className="fa fa-angle-left"></i> &nbsp;Back</a>
          <section className="search-results">
            <h3 className="search-results-title">{tagName} Decks Ranked by Popularity</h3>
            <ul className="search-results-list">{deckItems}</ul>
          </section>
        </section>
      );
    } else {

      const tagItems = this.state.popularTags.map(tag => (
        <li key={tag.id} className="tag-link" onClick={() => this.props.fetchTagShow(tag.name)}>{tag.name}</li>
      ));

      return (
        <section className="search-results-box">
          <p className="search-results-header">Browse Decks</p>
          <section className="search-results">
            <h3 className="search-results-title">Browse Popular Subjects</h3>
            <ul className="search-results-popular">{tagItems}</ul>
          </section>
        </section>
      );
    }
  }
}

export default SearchResults;
