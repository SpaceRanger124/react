import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers/cards/cards';
import logger from './logger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;