import { v1 as uuidv1 } from 'uuid';

export const fetchCards = (fetchedCards) => ({
    type: 'FETCH_CARDS',
    rawCards: fetchedCards.data.slice(0, 15)
})

export const removeSelectedCards = () => ({
    type: 'REMOVE_SELECTED_CARDS'
})

export const addCardToList = (caption, description) => ({
    type: 'ADD_CARD_TO_LIST',
    id: uuidv1(),
    caption,
    description
})

export const selectCardHandler = cardId => () => ({
    type: 'SELECT_CARD_HANDLER',
    cardId
})

export const updateCardHandler = cardId => (newCaption, newDescription) => ({
    type: 'UPDATE_CARD_HANDLER',
    cardId,
    newCaption,
    newDescription
})