import React from 'react';
import './Card.css';

const card = ( props ) => {
	return (
		<div className="Card">
			<div>{props.caption}</div>
			<div className="Card-line" />
			<div className="Card-text">{props.description}</div>
		</div>
	);
};

export default card;
