import React from 'react';

class TrashCard extends React.Component {
  constructor(props) {
    super(props);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.drop = this.drop.bind(this);
    this.state = { hovering: false };
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ hovering: true });
  }

  onDragLeave(e) {
    e.preventDefault();
    this.setState({ hovering: false });
  }

  drop(e) {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");
    this.props.deleteCard(cardId);
  }

  render() {
    const trashStyle = this.state.hovering ? { backgroundColor: "gray" } : {};

    return (
      <section
        style={trashStyle}
        className="trash-card"
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.drop}>
        <i className="fa fa-trash"></i>
      </section>
    )
  }
}

export default TrashCard;
