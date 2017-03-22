import React from 'react';
import SearchTagsContainer from '../search_tags/search_tags_container';

const SearchBar = () => (
  <nav className="search-bar-container">
    <section className="search-entry-box">
      <i className="fa fa-search"></i>
      <SearchTagsContainer />
    </section>
    <section className="search-entry-img">
      <aside>Search over 10 subjects created by top students, professors,
      publishers, and experts</aside>
    </section>
  </nav>
);

export default SearchBar;
