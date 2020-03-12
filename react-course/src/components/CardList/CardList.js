import React, { useContext } from 'react';

import Card from './Card/Card';
import CardsContext from '../../context/cards-context';

const CardList = props => {
    const cardsContext = useContext(CardsContext);
    return cardsContext.cards.map((card, index) => {
        return (
            <Card
                className="mt-1"
                caption={card.caption}
                description={card.description}
                readOnly={props.readOnly}
                id={card.id}
                key={card.id}
            />
        );
    });
}
export default CardList;