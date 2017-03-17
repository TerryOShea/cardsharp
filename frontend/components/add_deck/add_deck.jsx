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
    this.updateToggle = this.updateToggle.bind(this);
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

  updateToggle(e) {
    this.setState({ is_private: !this.state.is_private });
  }

  render() {
    const { title, description, category, is_private } = this.state;
    const formStyle = this.props.active ? { height: 300 } : { height: 0 };
    const capitalize = word => `${word[0].toUpperCase()}${word.slice(1)}`;
    const categoryItems = CATEGORIES.map((cat, i) => (
      <option value={cat} key={i}>{cat.split("_").map(word => capitalize(word)).join(" ")}</option>
    ));
    const toggleStyle = is_private ? { right: 0 } : { left: 0 };

    return (
      <form className="add-deck-form" onSubmit={this.handleSubmit} style={formStyle}>
        <input type="text" placeholder="Title" value={title} onChange={this.update('title')} />
        <textarea placeholder="Description" value={description} onChange={this.update('description')} />

        <select value={this.state.category} onChange={this.update('category')}>
          <option disabled>Category</option>
          {categoryItems}
        </select>

        <section className="privacy-section">
          Public
          <div className="privacy-toggler">
            <div className="toggle" style={toggleStyle} onClick={this.updateToggle}></div>
          </div>
          Private
        </section>

        <button>Add</button>
      </form>
    )
  }
}

export default AddDeck;
