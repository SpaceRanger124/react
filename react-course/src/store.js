import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import cardsReducer from './reducers/cards/cards';
import authorizationReducer from './reducers/authorization/authorization';

const combinedReducer = combineReducers({
    cardsReducer,
    authorizationReducer
});

const store = createStore(combinedReducer, applyMiddleware(thunk));

export default store;