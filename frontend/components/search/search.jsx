import React from 'react';
import SearchBarContainer from './search_bar_container';

const Search = props => (
  <div className="search-page">
    <SearchBarContainer />
    <section className="search-results-box">
      <div className="search-results-header">Browse Flashcards</div>
      <div className="search-results">results here</div>
    </section>
  </div>
);

export default Search;
