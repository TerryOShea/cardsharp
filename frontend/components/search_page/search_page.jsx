import React from 'react';
import SearchBar from './search_bar';
import SearchResultsContainer from '../search_results/search_results_container';

const SearchPage = props => (
  <div className="search-page">
    <SearchBar />
    <SearchResultsContainer />
  </div>
);

export default SearchPage;
