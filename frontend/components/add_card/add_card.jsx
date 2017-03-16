import React from 'react';

const defaultState = {
  side_a: "",
  side_b: "",
  formActivated: false
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
    const classes = `add-card${formActivated ? " activated" : ""}`;
    const buttonText = formActivated ? "x" : "+";

    return (
      <section className={classes}>
        <p onClick={this.toggleForm}>{buttonText}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={side_a} placeholder="Side A" onChange={this.update('side_a')} />
          <input type="text" value={side_b} placeholder="Side B" onChange={this.update('side_b')} />
          <button>Submit</button>
        </form>
      </section>
    );
  }
};

export default AddCard;
