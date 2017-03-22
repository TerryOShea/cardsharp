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
    this.props.createDeck(Object.assign({}, this.state))
      .then(() => this.setState(Object.assign({}, defaultState)));
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
    const formStyle = this.props.active ? { height: 260 } : { height: 0 };
    const capitalize = word => `${word[0].toUpperCase()}${word.slice(1)}`;
    const toggleStyle = is_private ? { right: 0 } : { left: 0 };

    const tagItems = tags.map(tag => (
      <li key={tag}>
        <span className="remove-tag-btn" onClick={() => this.removeTag(tag)}>x</span>&nbsp;
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
            Public
            <div className="privacy-toggler">
              <div className="toggle" style={toggleStyle} onClick={this.updateToggle}></div>
            </div>
            Private
          </section>

          <button>Add</button>
        </section>
      </form>
    )
  }
}

export default AddDeck;
