import React, { Component } from 'react';
import styled from 'styled-components';
import { v1 as uuidv1 } from 'uuid';

import classes from './App.module.css';
import CardList from '../components/CardList/CardList';
import AddCardPanel from '../components/AddCardPanel/AddCardPanel';

class App extends Component {
	
	state = {
		cards: [
			{id: uuidv1(), caption: "Mercury", description: "This is the first planet from the Sun.", isSelected: false },
			{id: uuidv1(), caption: "Venus", description: "This is the second planet from the Sun.", isSelected: false },
			{id: uuidv1(), caption: "Earth", description: "This is the third planet from the Sun.", isSelected: false },
			{id: uuidv1(), caption: "Mars", description: "This is the fourth planet from the Sun.", isSelected: false },
			{id: uuidv1(), caption: "Jupiter", description: "This is the fifth planet from the Sun.", isSelected: false },
			{id: uuidv1(), caption: "Saturn", description: "This is the sixth planet from the Sun.", isSelected: false },
			{id: uuidv1(), caption: "Uranus", description: "This is the seventh planet from the Sun.", isSelected: false },
			{id: uuidv1(), caption: "Neptune", description: "This is the eighth planet from the Sun.", isSelected: false }
		],
		readOnly: false,
		isAddCardPanelVisible: false
	};
	
	switchReadOnly = () => {
		this.setState({
			readOnly: !this.state.readOnly
		});
	}

	selectCardHandler = cardId => () => {
	    this.setState({
            cards: this.state.cards.map(card => {
                if (card.id === cardId) {
                    card.isSelected = !card.isSelected;
                }
                return card;
            })
        });
	}

	updateCardHandler = cardId => (newCaption, newDescription) => {
	    this.setState({
	        cards: this.state.cards.map(_card => {
	            if (_card.id !== cardId) {
	                return _card;
	            } else {
	                return {
	                    ..._card,
	                    caption: newCaption,
	                    description: newDescription
	                };
	            }
	        })
	    });
	}

	removeSelectedCards = () => {
        this.setState({
            cards: this.state.cards.filter(card => !card.isSelected)
        });
	}

	addNewCard = () => {
	    this.setState({
	        isAddCardPanelVisible: true
	    });
	}

	submitNewCard = (caption, description) => {
	    this.setState({
	        cards: [...this.state.cards, {id: uuidv1(), caption: caption, description: description}],
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
					The Solar System
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
				        cards={this.state.cards}
				        selectCardHandler={this.selectCardHandler}
				        updateCardHandler={this.updateCardHandler}
				    />
				</div>
			</div>
		);
	}
	
}

export default App;
