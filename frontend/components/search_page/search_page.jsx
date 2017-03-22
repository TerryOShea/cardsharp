import React from 'react';
import SearchBar from './search_bar';

const SearchPage = props => (
  <div className="search-page">
    <SearchBar />
    <section className="search-results-box">
      <div className="search-results-header">Browse Flashcards</div>
      <div className="search-results">results here</div>
    </section>
  </div>
);

export default SearchPage;
