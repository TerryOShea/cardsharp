import React from 'react';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion.name;

class AddTag extends React.Component {
  constructor() {
    super();
    this.getSuggestions = this.getSuggestions.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);

    this.state = {
      value: "",
      suggestions: []
    }
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  getSuggestions(value) {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : this.props.tags.filter(tag => (
      tag.name.toLowerCase().slice(0, inputLength) === inputValue
    ));
  }

  renderSuggestion(suggestion) {
    return (<div onClick={() => this.props.addTag(suggestion.name)}>
      {suggestion.name}
    </div>);
  }

  onChange(event, { newValue }) {
    this.setState({ value: newValue });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({ suggestions: this.getSuggestions(value) });
  }

  onSuggestionsClearRequested() {
    this.setState({ suggestions: [], value: "" });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Add tag...",
      value,
      onChange: this.onChange
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
};

export default AddTag;
