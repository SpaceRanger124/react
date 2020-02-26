import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  state = { isCheckboxChecked: false }

  changeStyles = () => {
    this.setState({isCheckboxChecked: !this.state.isCheckboxChecked})
  }

  render() {
    let styleClass = this.state.isCheckboxChecked ? "Card-checked" : "Card"

    return (
      <div className={styleClass}>
        <input type="checkbox" className="Card-checkbox" onChange={this.changeStyles}/>
        <div>{this.props.caption}</div>
        <hr />
        <div className="Card-text">{this.props.description}</div>
      </div>
    );
  }

}

export default Card;