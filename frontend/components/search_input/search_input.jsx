import React from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion.name;

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.state = {
      query: "",
      suggestions: []
    }
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    if (inputLength === 0) {
      return [];
    } else {
      return this.props.tags
        .filter(tag => (tag.name.toLowerCase().includes(inputValue)))
        .sort((a, b) => {
          const aStart = a.name.toLowerCase().startsWith(inputValue);
          const bStart = b.name.toLowerCase().startsWith(inputValue);

          if ((aStart && bStart) || !(aStart || bStart)) {
            return a < b ? -1 : 1;
          } else {
            return aStart ? -1 : 1;
          }
        });
    }
  }

  handleSubmit() {
    setTimeout(() => this.props.fetchTagShow(this.state.query), 0);
  }

  renderSuggestion(suggestion) {
    return (<div className="suggestion" onClick={this.handleSubmit}>
      {suggestion.name}
    </div>);
  }

  onChange(e, { newValue }) {
    this.setState({ query: newValue });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({ suggestions: this.getSuggestions(value).slice(0, 7) });
  }

  onSuggestionsClearRequested() {
    this.setState({ suggestions: [] });
  }

  render() {
    const { query, suggestions } = this.state;
    const inputProps = {
      placeholder: "e.g. Spanish",
      value: query,
      onChange: this.onChange,
      autoFocus: true
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps} />
    )
  }
}

export default SearchInput;
