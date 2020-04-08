import { v1 as uuidv1 } from 'uuid';
import * as types from './actionTypes';

export const fetchCards = (fetchedCards) => ({
    type: types.FETCH_CARDS,
    rawCards: fetchedCards.data.slice(0, 15)
})

export const removeSelectedCards = () => ({
    type: types.REMOVE_SELECTED_CARDS
})

export const addCardToList = (caption, description) => ({
    type: types.ADD_CARD_TO_LIST,
    id: uuidv1(),
    caption,
    description
})

export const selectCardHandler = cardId => () => ({
    type: types.SELECT_CARD_HANDLER,
    cardId
})

export const updateCardHandler = cardId => (newCaption, newDescription) => ({
    type: types.UPDATE_CARD_HANDLER,
    cardId,
    newCaption,
    newDescription
})