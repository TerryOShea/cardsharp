import React from 'react';

const MASTERY_BUTTONS = (
  <div className="mastery-buttons">
    <div id="1">1</div>
    <div id="2">2</div>
    <div id="3">3</div>
    <div id="4">4</div>
    <div id="5">5</div>
  </div>
);

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.updateMastery = this.updateMastery.bind(this);
    this.flipCard = this.flipCard.bind(this);
    this.state = { flip: false };
  }

  flipCard() {
    this.setState({ flip: !this.state.flip });
  }

  updateMastery(e) {
    const newCard = Object.assign({}, this.props.card, { mastery: parseInt(e.target.id) } );
    this.props.updateCard(newCard);
    this.setState({ flip: false });
    this.props.next();
  }

  render() {
    const { card } = this.props;
    const flipClasses = `flip-container${this.state.flip ? " flip" : ""}`;
    const buttonAction = this.state.flip ? this.updateMastery : this.flipCard;
    const buttonContents = this.state.flip ? MASTERY_BUTTONS : "Reveal Answer";
    const questionStyle = this.state.flip ? { color: "black" } : { color: "transparent" };

    return (
      <div className="card-show-container">
        <div className={flipClasses} onClick={this.flipCard}>
          <div className="flipper">
            <div className="card-show front">{card.side_a}</div>
            <div className="card-show back">{card.side_b}</div>
          </div>
        </div>

        <div className="button-question" style={questionStyle}>How well did you know this?</div>

        <button type="button" className="card-show-btn" onClick={buttonAction}>{buttonContents}</button>
      </div>
    )
  }
}

export default CardShow;
