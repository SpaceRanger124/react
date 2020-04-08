import { createStore } from 'redux';

import reducer from './reducers/cards/cards';

const store = createStore(reducer);

export default store;