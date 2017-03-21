import React from 'react';

const MASTERY_BUTTONS = (
  <div className="mastery-buttons">
    <div id="1">
      1
      <p>Not At All</p>
    </div>
    <div id="2">2</div>
    <div id="3">3</div>
    <div id="4">4</div>
    <div id="5">
      5
      <p>Perfectly</p>
    </div>
  </div>
);

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.updateMastery = this.updateMastery.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.state = {
      flipDeg: 0,
      front: true,
      oddQuestion: true
    };
  }

  flipCard() {
    const degChange = this.state.front ? 180 : -180;
    this.setState({ flipDeg: this.state.flipDeg + degChange, front: !this.state.front })
  }

  updateMastery(e) {
    const newCard = Object.assign({}, this.props.card, { mastery: parseInt(e.target.id) });
    this.props.updateCard(newCard).then(() => {
      this.setState({ front: true, oddQuestion: !this.state.oddQuestion });
      this.props.next();
    });
  }

  render() {
    const { card } = this.props;
    const { flipDeg, front, oddQuestion } = this.state;

    const flipperStyle = { transform: `rotateY(${flipDeg}deg)`};
    const buttonAction = front ? this.flipCard : this.updateMastery;
    const buttonContents = front ? "Reveal Answer" : MASTERY_BUTTONS;
    const questionStyle = front ? { color: "transparent" } : { color: "black" };
    // const cardLabel = front ? "Q." : "A."

    return (
      <div className="card-show-container">
        <div className="flip-container" onClick={this.flipCard}>
          <div className="flipper" style={flipperStyle}>
            <div className={`card-show ${oddQuestion ? "front" : "back"}`}>
              <section className="card-show-label">Q.</section>
              {card.side_a}
            </div>
            <div className={`card-show ${oddQuestion ? "back" : "front"}`}>
              <section className="card-show-label">A.</section>
              {card.side_b}
            </div>
          </div>
        </div>

        <div className="button-question" style={questionStyle}>How well did you know this?</div>

        <button type="button" className="card-show-btn" onClick={buttonAction}>{buttonContents}</button>
      </div>
    )
  }
}

export default CardShow;
