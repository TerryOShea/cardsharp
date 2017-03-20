import React from 'react';
import { Link } from 'react-router';
import ItemTooltipContainer from './item_tooltip_container';

const progressRef = {
  '0': '',
  '1': 'one-fifth',
  '2': 'two-fifths',
  '3': 'three-fifths',
  '4': 'four-fifths',
  '5': 'full'
}

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
    const progressName = `progress ${progressRef[deck.mastery.toString()]}`;
    const tooltip = this.state.activated ? (<ItemTooltipContainer deck={deck} />) : "";
    const progressStyle = this.state.activated ? { display: "none" } : {};

    return (
      <li className="deck-item">
        <section className="deck-widget" onMouseEnter={this.handleHover} onMouseLeave={this.handleBlur}>
          <div className={progressName} style={progressStyle}></div>
          {tooltip}
        </section>
        <p>{deck.title}</p>
      </li>
    )
  }
}

export default DeckIndexItem;
