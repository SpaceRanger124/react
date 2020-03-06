import React, { Component } from 'react';
import styled from 'styled-components';

import classes from './App.module.css';
import CardList from '../components/CardList/CardList'

class App extends Component {
	
	state = {
		cards: [
			{id: 1, caption: "Mercury", description: "This is the first planet from the Sun.", isSelected: false },
			{id: 2, caption: "Venus", description: "This is the second planet from the Sun.", isSelected: false },
			{id: 3, caption: "Earth", description: "This is the third planet from the Sun.", isSelected: false },
			{id: 4, caption: "Mars", description: "This is the fourth planet from the Sun.", isSelected: false },
			{id: 5, caption: "Jupiter", description: "This is the fifth planet from the Sun.", isSelected: false },
			{id: 6, caption: "Saturn", description: "This is the sixth planet from the Sun.", isSelected: false },
			{id: 7, caption: "Uranus", description: "This is the seventh planet from the Sun.", isSelected: false },
			{id: 8, caption: "Neptune", description: "This is the eighth planet from the Sun.", isSelected: false }
		],
		readOnly: false
	};
	
	switchReadOnly = () => {
		this.setState({
			readOnly: !this.state.readOnly
		});
	}

	selectCardHandler = cardId => () => {
	    const cards = this.state.cards.slice();
	    const selectedCard = cards.find(card => card.id === cardId);
	    selectedCard.isSelected = !selectedCard.isSelected;
	    this.setState({
            cards: cards
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
        var cards = this.state.cards.slice();
        this.setState({
            cards: cards.filter(card => !card.isSelected)
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
				</div>
				<div className={classes['App-cards']}>
				    <CardList
				        readOnly={this.state.readOnly}
				        cards={this.state.cards}
				        selectCardHandler={this.selectCardHandler }
				        updateCardHandler={this.updateCardHandler}
				    />
				</div>
			</div>
		);
	}
	
}

export default App;
