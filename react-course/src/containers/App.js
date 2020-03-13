import React, { Component } from 'react';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';

import classes from './App.module.css';
import CardList from '../components/CardList/CardList';
import AddCardPanel from '../components/AddCardPanel/AddCardPanel';
import CardsContext from '../context/cards-context';

class App extends Component {
	
	state = {
		readOnly: false,
		isAddCardPanelVisible: false
	};

	static contextType = CardsContext;
	
	switchReadOnly = () => {
		this.setState({
			readOnly: !this.state.readOnly
		});
	}

	selectCardHandler = cardId => () => {
	    this.context.cards = this.context.cards.map(card => {
            if (card.id === cardId) {
                card.isSelected = !card.isSelected;
            }
            return card;
        });
	}

	updateCardHandler = cardId => (newCaption, newDescription) => {
	    this.context.cards = this.context.cards.map(_card => {
            if (_card.id !== cardId) {
                return _card;
            } else {
                return {
                    ..._card,
                    caption: newCaption,
                    description: newDescription
                };
            }
        });
	}

	removeSelectedCards = () => {
	    this.context.cards = this.context.cards.filter(card => !card.isSelected);
	    console.log(this.context.cards);
	}

	addNewCard = () => {
	    this.setState({
	        isAddCardPanelVisible: true
	    });
	}

	submitNewCard = (caption, description) => {
	    this.context.cards = [...this.context.cards, {id: uuidv1(), caption: caption, description: description}];
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
	    this.context.selectCardHandler = this.selectCardHandler;
	    this.context.updateCardHandler = this.updateCardHandler;

		const StyledInput = styled.input`
            outline: 1px dashed purple;
            outline-offset: -1px;
            transform: scale(2);
            margin-top: 40px;
            margin-left: 30px;
        `;
        let addCardPanel = null;
        if (this.state.isAddCardPanelVisible) {
            addCardPanel = (
                <AddCardPanel
                    submit={this.submitNewCard}
                    cancel={this.cancelNewCard}
                />
            );
        }
		return (
			<div className={classes.App}>
				<header className={classes['App-header']}>
					<p>The Solar System</p>
					<div>{this.context.cards.length}</div>
				</header>
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
				    <button onClick={this.removeSelectedCards}>
				        Remove selected cards
				    </button>
				    <button onClick={this.addNewCard}>
				        Add a new card
				    </button>
				</div>
				{addCardPanel}
				<div className={classes['App-cards']}>
				    <CardList
				        readOnly={this.state.readOnly}
				    />
				</div>
			</div>
		);
	}
	
}

export default App;
