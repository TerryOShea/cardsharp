import React from 'react';
import AddTagContainer from './add_tag_container';

const defaultState = {
  title: "",
  description: "",
  tags: [],
  is_private: false
};

class AddDeck extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateToggle = this.updateToggle.bind(this);
    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.state = Object.assign({}, defaultState);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createDeck(Object.assign({}, this.state));
  }

  addTag(tagName) {
    this.setState({ tags: [...this.state.tags, tagName]});
  }

  removeTag(tagName) {
    const newTags = [...this.state.tags];
    newTags.splice(newTags.indexOf(tagName), 1);
    this.setState({ tags: newTags });
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  updateToggle(e) {
    this.setState({ is_private: !this.state.is_private });
  }

  render() {
    const { title, description, tags, is_private } = this.state;
    const formStyle = this.props.active ? { height: 320 } : { height: 0 };
    const capitalize = word => `${word[0].toUpperCase()}${word.slice(1)}`;
    const toggleStyle = is_private ? { right: 0 } : { left: 0 };

    const tagItems = tags.map(tag => (
      <li key={tag}>
        <button className="remove-tag-btn" onClick={() => this.removeTag(tag)}><i className="fa fa-close"></i></button>&nbsp;
        {tag}
      </li>
    ));

    return (
      <form className="add-deck-form" onSubmit={this.handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={this.update('title')} />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={this.update('description')} />

        <ul className="tags-container">{tagItems}</ul>
        <AddTagContainer addTag={this.addTag} />

        <section className="add-deck-form-bottom">
          <section className="privacy-section">
            <p className={is_private ? "" : "privacy-selected"}>Public</p>
            <div className="privacy-toggler" onClick={this.updateToggle}>
              <div className="toggle" style={toggleStyle}></div>
            </div>
            <p className={is_private ? "privacy-selected" : ""}>Private</p>
          </section>

          <button>Add</button>
        </section>
      </form>
    )
  }
}

export default AddDeck;
