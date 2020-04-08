import React from 'react';
import { Redirect } from 'react-router-dom';

import Card from './Card/Card';

const CardList = props => {
    const redirectToCard = (card) => (
        <Redirect to={{
                pathname: "/card/" + card.id,
                state: {
                    className: "mt-2",
                    caption: card.caption,
                    description: card.description,
                    readOnly: props.readOnly
                }
            }}
        />
    );

    return props.cards.map((card, index) => {
        return (
            <Card
                className="mt-1"
                caption={card.caption}
                description={card.description}
                selectCardHandler={props.selectCardHandler(card.id)}
                updateCardHandler={props.updateCardHandler(card.id)}
                redirectToCard={redirectToCard(card)}
                readOnly={props.readOnly}
                key={card.id}
            />
        );
    });
}
export default CardList;