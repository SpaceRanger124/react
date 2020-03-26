import React, { Component } from 'react';

import Header from '../components/Header/Header';
import {
    Provider as CardsProvider,
    Consumer as CardConsumer
} from '../context/cards-context';

class App extends Component {

	render() {
		return (
		    <CardsProvider>
		        <CardConsumer>
		            {context => (
		                <Header cardsNumber={context.cards.length} />
		            )}
		        </CardConsumer>
		    </CardsProvider>
		);
	}
	
}

export default App;
