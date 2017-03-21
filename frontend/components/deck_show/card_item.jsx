import React from 'react';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFlip = this.toggleFlip.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.state = {
      flipped: false,
      allowEdit: false,
      side_a: this.props.card.side_a,
      side_b: this.props.card.side_b
    };
  }

  toggleFlip() {
    this.setState({ flipped: !this.state.flipped });
  }

  toggleEdit() {
    if (this.state.allowEdit) {
      const { card } = this.props;
      this.props.updateCard(Object.assign({}, this.props.card, this.state));
    }

    this.setState({ allowEdit: !this.state.allowEdit });
  }

  dragStart(e) {
    e.dataTransfer.setData("cardId", e.target.dataset.id);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { id } = this.props.card;
    const { flipped, allowEdit, side_a, side_b } = this.state;

    const showText = flipped ? side_b : side_a;
    const arrow = flipped ? "left" : "right";
    const lock = allowEdit ? "unlock" : "lock";

    let editBtns = "";
    if (allowEdit) {
      editBtns = [
        <button type="button" key="1">B</button>,
        <button type="button" key="2">I</button>,
      ];
    }

    return (
      <li className="card" data-id={id} draggable onDragStart={this.dragStart}>
        <textarea
          value={showText}
          onChange={this.update(flipped ? 'side_b' : 'side_a')}
          disabled={!allowEdit}></textarea>

        <section className="card-buttons">
          <button onClick={this.toggleEdit} className="edit-btn">
            <i className={`fa fa-${lock}`}></i>
          </button>
          {editBtns}
          <button onClick={this.toggleFlip} className="flip-btn">
            <i className={`fa fa-chevron-${arrow}`}></i>
          </button>
        </section>
      </li>
    )
  }
}

export default CardItem;
