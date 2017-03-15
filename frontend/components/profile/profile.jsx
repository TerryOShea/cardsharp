import React from 'react';
import Decks from '../decks/decks';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchDecks(this.props.currentUser.id);
  }

  render() {
    return (
      <div>
        <h3>My Decks</h3>
        <Decks decks={this.props.decks} />
      </div>
    )
  }
}

export default Profile;
