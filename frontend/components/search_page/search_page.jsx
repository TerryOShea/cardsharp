import React from 'react';
import SearchBar from './search_bar';
import SearchResultsContainer from '../search_results/search_results_container';

const SearchPage = props => (
  <div className="search-page">
    <SearchBar />
    <section className="search-results-box">
      <div className="search-results-header">Browse Decks</div>
      <SearchResultsContainer />
    </section>
  </div>
);

export default SearchPage;
