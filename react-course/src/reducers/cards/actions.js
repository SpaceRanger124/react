import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

import * as types from './actionTypes';

export const requestCards = () =>
    dispatch => {
        console.log('requesting cards ...');
        axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
            .then(response =>
                dispatch(fetchCards(response))
            );
    }

const fetchCards = (fetchedCards) =>
    dispatch => {
        console.log('fetched cards:');
        console.log(fetchedCards);
        dispatch({
            type: types.FETCH_CARDS,
            rawCards: fetchedCards.data.slice(0, 15)
        });
    }

export const removeSelectedCards = () =>
    dispatch => {
        console.log('remove selected cards ...');
        dispatch({
            type: types.REMOVE_SELECTED_CARDS
        });
    }

export const addCardToList = (caption, description) =>
    dispatch => {
        console.log('new card added:');
        console.log('caption: ' + caption);
        console.log('description: ' + description);
        dispatch({
            type: types.ADD_CARD_TO_LIST,
            id: uuidv1(),
            caption,
            description
        });
    }

export const selectCardHandler = cardId => () =>
    dispatch => {
        console.log('selected card:');
        console.log('card ID: ' + cardId);
        dispatch({
            type: types.SELECT_CARD_HANDLER,
            cardId
        });
    }

export const updateCardHandler = cardId => (newCaption, newDescription) =>
    dispatch => {
        console.log('updated card:');
        console.log('card ID: ' + cardId);
        console.log('new caption: ' + newCaption);
        console.log('new description: ' + newDescription);
        dispatch({
            type: types.UPDATE_CARD_HANDLER,
            cardId,
            newCaption,
            newDescription
        });
    }