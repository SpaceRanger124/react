import * as types from './actionTypes';

const initialState = {
    readOnly: false,
    cards: []
}

const cards = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CARDS:
            return {
                ...state,
                cards: action.rawCards.map(card => {
                    return {
                        id: card.Number,
                        caption: card.Name,
                        description: card.About
                    }
                })
            }
        case types.REMOVE_SELECTED_CARDS:
            return {
                ...state,
                cards: state.cards.filter(
                    card => !card.isSelected
                )
            }
        case types.ADD_CARD_TO_LIST:
            return {
                ...state,
                cards: [
                    ...state.cards,
                    {
                        id: action.id,
                        caption: action.caption,
                        description: action.description
                    }
                ]
            }
        case types.SELECT_CARD_HANDLER:
            return {
                ...state,
                cards: state.cards.map(card => {
                    if (card.id === action.cardId) {
                        card.isSelected = !card.isSelected;
                    }
                    return card;
                })
            }
        case types.UPDATE_CARD_HANDLER:
            return {
                ...state,
                cards: state.cards.map(_card => {
                    if (_card.id !== action.cardId) {
                        return _card;
                    } else {
                        return {
                            ..._card,
                            caption: action.newCaption,
                            description: action.newDescription
                        };
                    }
                })
            }
        case types.SWITCH_READ_ONLY:
            return {
                ...state,
                readOnly: !state.readOnly
            }
        default:
            return state
    }
}

export default cards;