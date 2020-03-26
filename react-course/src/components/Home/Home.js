import React, { Component } from 'react';
import styled from 'styled-components';

import classes from './Home.module.css';
import CardList from '../CardList/CardList';
import AddCardPanel from '../AddCardPanel/AddCardPanel';
import { Consumer as CardConsumer } from '../../context/cards-context';

class Home extends Component {

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

	submitNewCard = (addCardToList) => (caption, description) => {
	    addCardToList(caption, description);
	    this.setState({
	        isAddCardPanelVisible: false
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
            <div className={classes.Home}>
                <StyledInput
                    type="checkbox"
                    id="readOnlyCheckbox"
                    checked={this.state.readOnly}
                    onChange={this.switchReadOnly}
                />
                <label
                    className={classes['Home-checkbox-label']}
                    htmlFor="readOnlyCheckbox"
                >
                    Read only
                </label>
                <div className={classes['Home-button-block']}>
                    <CardConsumer>
                        {context => (
                            <div>
                                <button onClick={context.removeSelectedCards}>
                                    Remove selected cards
                                </button>
                                <button onClick={this.addNewCard}>
                                    Add a new card
                                </button>
                            </div>
                        )}
                    </CardConsumer>
                </div>
                <CardConsumer>
                    {context => this.state.isAddCardPanelVisible ? (
                        <AddCardPanel
                            submit={this.submitNewCard(context.addCardToList)}
                            cancel={this.cancelNewCard}
                        />
                    ) : null}
                </CardConsumer>
                <div className={classes['Home-cards']}>
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
		);
	}

}

export default Home;
