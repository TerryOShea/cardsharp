import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDecks(this.props.currentUser.id);
  }

  render() {
    const decks = this.props.decks.map(deck => {
      const catName = deck.category.split("_").join("-");
      return (
        <li className={`deck-widget ${catName}`} key={deck.id}>
          {deck.title}
        </li>
      );
    });

    return (
      <div>
        <h3>My Decks</h3>
        <ul className="decks-container">{decks}</ul>
      </div>
    )
  }
}

export default Profile;
