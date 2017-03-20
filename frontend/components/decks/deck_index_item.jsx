import React from 'react';
import { Link } from 'react-router';

class DeckIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = { activated: false };
  }

  handleHover() {
    this.setState({ activated: true });
  }

  handleBlur() {
    this.setState({ activated: false });
  }

  render() {
    const { deck } = this.props;

    return (
      <li className="deck-item" onMouseEnter={this.handleHover} onMouseLeave={this.handleBlur}>
        <p>{deck.mastery}%</p>
        <Link to={`/train/${deck.id}`}>{deck.title}</Link>
        <Link to={`/decks/${deck.id}`}>
          <button type="button"><i className="fa fa-cog"></i></button>
        </Link>
      </li>
    )
  }
}

export default DeckIndexItem;
