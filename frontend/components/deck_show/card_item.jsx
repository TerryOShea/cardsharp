import React from 'react';

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFlip = this.toggleFlip.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.dragStart = this.dragStart.bind(this);
    this.state = {
      flipped: false,
      editing: false,
      side_a: this.props.card.side_a,
      side_b: this.props.card.side_b
    };
  }

  toggleFlip() {
    this.setState({ flipped: !this.state.flipped });
  }

  toggleEdit() {
    if (this.state.editing) {
      const { card } = this.props;
      this.props.updateCard(Object.assign({}, this.props.card, this.state));
    }

    this.setState({ editing: !this.state.editing });
  }

  dragStart(e) {
    e.dataTransfer.setData("cardId", e.target.dataset.id);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  render() {
    const { id } = this.props.card;
    const { flipped, editing, side_a, side_b } = this.state;
    const { isOwner } = this.props;

    const showText = flipped ? side_b : side_a;
    const arrow = flipped ? "left" : "right";
    const lock = editing ? "check" : "edit";

    let editOptions = "";
    // if (editing) {
    //   editOptions = [
    //     <button type="button" key="1">B</button>,
    //     <button type="button" key="2">I</button>,
    //   ];
    // }

    const editBtn = isOwner ? (
      <button onClick={this.toggleEdit} className="edit-btn">
        <i className={`fa fa-${lock}`}></i>
      </button>
    ) : (<p></p>);

    const textStyle = this.state.editing ? { color: "red" } : {};

    return (
      <li key={id} className="card" data-id={id} draggable onDragStart={this.dragStart}>
        <textarea
          value={showText}
          onChange={this.update(flipped ? 'side_b' : 'side_a')}
          disabled={!editing}
          style={textStyle}></textarea>

        <section className="card-buttons">
          {editBtn}
          {editOptions}
          <button onClick={this.toggleFlip} className="flip-btn">
            <i className={`fa fa-angle-${arrow}`}></i>
          </button>
        </section>
      </li>
    )
  }
}

export default CardItem;
