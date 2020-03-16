import React from 'react';

import Card from './Card/Card';

const CardList = props => {
    return props.cards.map((card, index) => {
        return (
            <Card
                className="mt-1"
                caption={card.caption}
                description={card.description}
                selectCardHandler={props.selectCardHandler(card.id)}
                updateCardHandler={props.updateCardHandler(card.id)}
                readOnly={props.readOnly}
                key={card.id}
            />
        );
    });
}
export default CardList;