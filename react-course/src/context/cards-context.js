import React from 'react';
import { v1 as uuidv1 } from 'uuid';

const cardsContext = React.createContext({
    cards: [
        {id: uuidv1(), caption: "Mercury", description: "This is the first planet from the Sun.", isSelected: false },
        {id: uuidv1(), caption: "Venus", description: "This is the second planet from the Sun.", isSelected: false },
        {id: uuidv1(), caption: "Earth", description: "This is the third planet from the Sun.", isSelected: false },
        {id: uuidv1(), caption: "Mars", description: "This is the fourth planet from the Sun.", isSelected: false },
        {id: uuidv1(), caption: "Jupiter", description: "This is the fifth planet from the Sun.", isSelected: false },
        {id: uuidv1(), caption: "Saturn", description: "This is the sixth planet from the Sun.", isSelected: false },
        {id: uuidv1(), caption: "Uranus", description: "This is the seventh planet from the Sun.", isSelected: false },
        {id: uuidv1(), caption: "Neptune", description: "This is the eighth planet from the Sun.", isSelected: false }
    ],
    selectCardHandler: () => {},
    updateCardHandler: () => {}
});

export default cardsContext;