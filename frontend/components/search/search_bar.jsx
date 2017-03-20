import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.updateSearch = this.updateSearch.bind(this);
    this.state = { searchText: "" };
  }

  updateSearch(e) {
    this.setState({ searchText: e.target.value });
  }

  render() {
    return (
      <nav className="search-bar-container">
        <section className="search-entry-box">
          <i className="fa fa-search"></i>
          <input
            className="search-input"
            type="text"
            placeholder="e.g. MCAT, pharma, bar exam, Spanish"
            onChange={this.updateSearch} />
        </section>
        <section className="search-entry-img">
          <aside>Search over 10 subjects created by top students, professors,
          publishers, and experts</aside>
        </section>
      </nav>
    )
  }
};

export default SearchBar;
