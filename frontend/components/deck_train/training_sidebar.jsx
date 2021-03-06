import React from 'react';
import { Link } from 'react-router';

let PROGRESS_HEIGHT = 300;

class TrainingSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDecks = this.toggleDecks.bind(this);
    this.newTrain = this.newTrain.bind(this);
    this.state = { showDecks: false }
  }

  componentDidMount() {
    this.props.fetchDecks(this.props.currentUser.id);
  }

  toggleDecks() {
    this.setState({ showDecks: !this.state.showDecks });
  }

  newTrain(id) {
    this.props.fetchDeck(id).then(() => {
      this.setState({ showDecks: false });
      this.props.reset();
    });
  }

  render() {
    const { deckTitle, numCards, numSeen, otherDecks, full } = this.props;

    const barHeight = Math.ceil(PROGRESS_HEIGHT/numCards);

    const progresses = [];
    for (let i = 0; i < (full ? numCards : numSeen); i++) {
      progresses.push(<div className="progress-bar" style={{height: barHeight}} key={i}></div>);
    }

    const decksBtnColor = this.state.showDecks ? { backgroundColor: "black" } : {};

    let decks = "";
    if (this.state.showDecks) {
      const deckListItems = [];
      otherDecks.forEach(deck => deckListItems.push(
        <li key={deck.id}>
          <Link to={`/train/${deck.id}`} onClick={() => this.newTrain(deck.id)}>
            {deck.title}
          </Link>
        </li>
      ));
      decks = (<ul className="train-decks-list">{deckListItems}</ul>);
    }

    return (
      <div className="training-sidebar">
        <nav className="main-nav">
          <Link to="/"><div className="header-logo"></div></Link>
          <Link to="/search"><i className="fa fa-search"></i></Link>
          <Link to="/profile"><i className="fa fa-user-o"></i></Link>
        </nav>
        <nav className="training-nav">
          <p className="training-nav-title">Studying: <span>{deckTitle}</span></p>
          <section className="training-nav-btns">
            <Link to="/profile"><button type="button" className="done-btn">
              <i className="fa fa-caret-left"></i>&nbsp;&nbsp;&nbsp;Done
            </button></Link>
            <button type="button" onClick={this.toggleDecks} style={decksBtnColor} className="decks-btn">
              Decks&nbsp;&nbsp;&nbsp;<i className="fa fa-caret-down"></i>
            </button>
            {decks}
          </section>
          <div className="training-progress">
            {progresses}
          </div>
          <p className="progress-title">Progress</p>
        </nav>
      </div>
    );
  }
}

export default TrainingSidebar;
