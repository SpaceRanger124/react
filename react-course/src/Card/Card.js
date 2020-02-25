import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div className="Card">
            <div>{props.caption}</div>
            <hr />
            <div className="Card-text">{props.description}</div>
        </div>
    );
};

export default Card;