import React from 'react';
import SearchInputContainer from '../search_input/search_input_container';

const SearchBar = () => (
  <nav className="search-bar-container">
    <section className="search-entry-box">
      <i className="fa fa-search"></i>
      <SearchInputContainer />
    </section>
    <section className="search-entry-img">
      <aside>Search over 10 subjects created by top students, professors,
      publishers, and experts</aside>
    </section>
  </nav>
);

export default SearchBar;
