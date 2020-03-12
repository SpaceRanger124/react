import React from 'react';

const cardsContext = React.createContext({
    cards: [],
    selectCardHandler: () => {},
    updateCardHandler: () => {}
});

export default cardsContext;