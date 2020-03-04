import React from 'react';

import Card from './Card/Card';

const cardList = (props) => props.cards.map((card, index) => {
    return <Card
        selectHandler={props.selectCardHandler}
        caption={card.caption}
        description={card.description}
        readOnly={props.readOnly}
        key={card.caption}
    />
});

export default cardList;