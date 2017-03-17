import React from 'react';

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.flipCard = this.flipCard.bind(this);
    this.state = { flip: false };
  }

  flipCard() {
    this.setState({ flip: !this.state.flip });
  }

  render() {
    const { card } = this.props;
    const flipClasses = `flip-container${this.state.flip ? " flip" : ""}`;

    return (
      <div className="card-show-container">
        <div className={flipClasses} onClick={this.flipCard}>
          <div className="flipper">
            <div className="card-show front">{card.side_a}</div>
            <div className="card-show back">{card.side_b}</div>
          </div>
        </div>

        <button type="button" className="card-show-btn" onClick={this.flipCard}>Reveal Answer</button>
      </div>
    )
  }
}

export default CardShow;
