import React from 'react';

const defaultState = {
  side_a: "",
  side_b: "",
  mastery: 0,
};

class AddCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.state = Object.assign({}, defaultState);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCard(Object.assign({}, this.state, { deck_id: this.props.deckId }))
      .then(() => this.setState(Object.assign({}, defaultState, { formActivated: true })));
  }

  toggleForm() {
    this.setState({ formActivated: !this.state.formActivated });
  }

  render() {
    const { side_a, side_b, formActivated } = this.state;
    const formStyle = this.props.active ? { height: 300 } : { height: 0 };
    const buttonText = formActivated ? "+" : "-";

    return (
      <form className="add-card-form" onSubmit={this.handleSubmit} style={formStyle}>
        <textarea value={side_a} placeholder="Side A" onChange={this.update('side_a')} />
        <textarea value={side_b} placeholder="Side B" onChange={this.update('side_b')} />
        <button>Submit</button>
      </form>
    );
  }
};

export default AddCard;
