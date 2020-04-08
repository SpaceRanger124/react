import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import store from '../store';

class App extends Component {

	render() {
		return (
		    <Router>
                <Provider store={store}>
                    <Header />
                    <Main />
                </Provider>
		    </Router>
		);
	}
	
}

export default App;
