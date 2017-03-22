import React from 'react';

class SearchTags extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchTags().then(() => this.setState({ filteredTags: this.props.tags }));
  }

  filterTags(stub) {
    const newTags = Object.assign({}, this.state.filteredTags);
    Object.keys(newTags).forEach(id => {
      if (!newTags[id].name.startsWith(stub)) {
        delete newTags[id];
      }
    });
  }

  handleChange(e) {
    const { searchQuery } = this.state;

    if (e.target.value.length > searchQuery) {
      this.setState({ filteredTags: this.filterTags(e.target.value) })
    } else {

    }
    console.log(e.target.value);
  }

  render() {
    return (
      <input
        className="search-input"
        type="text"
        placeholder="e.g. MCAT, pharma, bar exam, Spanish"
        onChange={this.handleChange} />
    )
  }
}

export default SearchTags;
