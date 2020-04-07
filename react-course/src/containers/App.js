import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from '../components/Header/Header';
import reducer from '..//reducers/cards';

const store = createStore(reducer);

class App extends Component {

	render() {
		return (
		    <Provider store={store}>
		        <Header />
		    </Provider>
		);
	}
	
}

export default App;
