import React from 'react';

const defaultState = {
  title: "",
  description: "",
  category: "",
  is_private: false,
  formActivated: false
};

class AddDeck extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = Object.assign({}, defaultState);
  }

  handleSubmit() {
    this.props.createDeck(Object.assign({}, this.state))
      .then(() => this.setState(Object.assign({}, defaultState, { formActivated: true })));
  }

  handleFocus() {
    this.setState({ formActivated: true });
  }

  handleBlur() {
    this.setState({ formActivated: false });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { title, description, category, is_private } = this.state;

    return (
      <div>
        <h3>Add Deck</h3>
        <form>
          <input type="text" placeholder="Title" value={title} onChange={this.update('title')} />
          <textarea placeholder="Description" value={description} onChange={this.update('description')} />
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default AddDeck;
