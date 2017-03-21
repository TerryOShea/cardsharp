import React from 'react';
import { Link } from 'react-router';

const COLOR_REF = {
  "0": "mastery-purple",
  "1": "mastery-coral",
  "2": "mastery-yellow",
  "3": "mastery-seagreen",
  "4": "mastery-blue"
}

class DeckIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activated: false };
  }

  render() {
    const { deck } = this.props;

    let itemName;
    if (deck.numCards === 0) {
      itemName = [
          (<div className="disabled-item-name" key="1">{deck.title}</div>),
          (<p key="2"><Link to={`/decks/${deck.id}`}>add cards</Link></p>)
      ];
    } else {
      itemName = [
        (<Link to={`/train/${deck.id}`} key="1">{deck.title}</Link>),
        (<p key="2">Cards: {deck.numCards}</p>)
      ];
    }

    const masteryClass = deck.numCards === 0 ?
      "" :
      ` ${COLOR_REF[Math.floor(deck.mastery/20).toString()]}`;

    return (
      <li className="deck-item">
        <p className={`deck-item-mastery${masteryClass}`}>{deck.mastery}%</p>

        <section className="deck-item-name">
          {itemName}
        </section>

        <Link to={`/decks/${deck.id}`}>
          <button type="button"><i className="fa fa-cog"></i></button>
        </Link>
      </li>
    );
  }
}

export default DeckIndexItem;
