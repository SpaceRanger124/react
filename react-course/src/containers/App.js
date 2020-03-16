import React, { Component } from 'react';
import styled from 'styled-components';

import classes from './App.module.css';
import CardList from '../components/CardList/CardList';
import AddCardPanel from '../components/AddCardPanel/AddCardPanel';
import {
    Provider as CardsProvider,
    Consumer as CardConsumer
} from '../context/cards-context';

class App extends Component {
	
	state = {
		readOnly: false,
		isAddCardPanelVisible: false
	};
	
	switchReadOnly = () => {
		this.setState({
			readOnly: !this.state.readOnly
		});
	}

	addNewCard = () => {
	    this.setState({
	        isAddCardPanelVisible: true
	    });
	}

	cancelNewCard = () => {
	    this.setState({
            isAddCardPanelVisible: false
        });
    }

	render() {
		const StyledInput = styled.input`
            outline: 1px dashed purple;
            outline-offset: -1px;
            transform: scale(2);
            margin-top: 40px;
            margin-left: 30px;
        `;
		return (
		    <CardsProvider>
                <div className={classes.App}>
                    <CardConsumer>
                        {context => (
                            <header className={classes['App-header']}>
                                <p>The Solar System</p>
                                <div>{context.cards.length}</div>
                            </header>
                        )}
                    </CardConsumer>
                    <StyledInput
                        type="checkbox"
                        id="readOnlyCheckbox"
                        checked={this.state.readOnly}
                        onChange={this.switchReadOnly}
                    />
                    <label
                        className={classes['App-checkbox-label']}
                        htmlFor="readOnlyCheckbox"
                    >
                        Read only
                    </label>
                    <div className={classes['App-button-block']}>
                        <CardConsumer>
                            {context => (
                                <button onClick={context.removeSelectedCards}>
                                    Remove selected cards
                                </button>
                            )}
                        </CardConsumer>
                        <button onClick={this.addNewCard}>
                            Add a new card
                        </button>
                    </div>
                    {this.state.isAddCardPanelVisible ?
                        (
                            <CardConsumer>
                                {context => (
                                    <AddCardPanel
                                        submit={context.submitNewCard}
                                        cancel={this.cancelNewCard}
                                    />
                                )}
                            </CardConsumer>
                        ) : null
                    }
                    <div className={classes['App-cards']}>
                        <CardConsumer>
                            {context => (
                                <CardList
                                    readOnly={this.state.readOnly}
                                    cards={context.cards}
                                    selectCardHandler={context.selectCardHandler}
                                    updateCardHandler={context.updateCardHandler}
                                />
                            )}
                        </CardConsumer>
                    </div>
                </div>
			</CardsProvider>
		);
	}
	
}

export default App;
