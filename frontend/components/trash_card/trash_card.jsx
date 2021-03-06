import React from 'react';

class TrashCard extends React.Component {
  constructor(props) {
    super(props);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
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

  onDrop(e) {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");
    this.props.deleteCard(cardId);
  }

  render() {
    const trashStyle = this.state.hovering ? { backgroundColor: "gray" } : {};

    return (
      <li
        style={trashStyle}
        className="trash-card"
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}>
        <i className="fa fa-trash"></i>
      </li>
    )
  }
}

export default TrashCard;
