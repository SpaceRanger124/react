import * as types from './actionTypes';

const cards = (state = [], action) => {
    switch (action.type) {
        case types.FETCH_CARDS:
            return action.rawCards.map(card => {
                return {
                    id: card.Number,
                    caption: card.Name,
                    description: card.About
                }
            })
        case types.REMOVE_SELECTED_CARDS:
            return state.filter(
                card => !card.isSelected
            )
        case types.ADD_CARD_TO_LIST:
            return [
                ...state,
                {
                    id: action.id,
                    caption: action.caption,
                    description: action.description
                }
            ]
        case types.SELECT_CARD_HANDLER:
            return state.map(card => {
                if (card.id === action.cardId) {
                    card.isSelected = !card.isSelected;
                }
                return card;
            })
        case types.UPDATE_CARD_HANDLER:
            return state.map(_card => {
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
        default:
            return state
    }
}

export default cards;