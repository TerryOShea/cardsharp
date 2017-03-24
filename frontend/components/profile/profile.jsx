import React from 'react';
import Decks from '../decks/decks';
import AddDeckContainer from '../add_deck/add_deck_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { formActivated: false }
  }

  handleClick() {
    this.setState({ formActivated: !this.state.formActivated });
  }

  componentDidMount() {
    this.props.fetchDecks(this.props.currentUser.id);
  }

  render() {
    const { formActivated } = this.state;
    const buttonText = formActivated ? "-" : "+";

    return (
      <div className="profile-container">
        <div className="profile-header">
          <h3>My Decks&nbsp;
            <button className="add-deck-btn" onClick={this.handleClick}>{buttonText}</button>
          </h3>
        </div>
        <AddDeckContainer active={formActivated} />
        <section className="profile-decks">
          <p>Mastery</p>
          <Decks decks={this.props.decks} />
        </section>
      </div>
    )
  }
}

export default Profile;
