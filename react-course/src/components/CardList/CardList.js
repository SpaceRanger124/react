import React from 'react';

import Card from './Card/Card';

const CardList = props =>
    props.cards.map((card, index) => {
        return (
            <Card
                className="mt-1"
                selectHandler={props.selectCardHandler}
                updateCardHandler={props.updateCardHandler(card.id)}
                caption={card.caption}
                description={card.description}
                readOnly={props.readOnly}
                key={card.caption}
            />
        );
    });

export default CardList;