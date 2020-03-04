import React, { Component } from 'react';
import styled from 'styled-components';

import classes from './App.module.css';
import CardList from '../components/CardList/CardList'

class App extends Component {
	
	state = {
		cards: [
			{caption: "Mercury", description: "This is the first planet from the Sun.", isSelected: false },
			{caption: "Venus", description: "This is the second planet from the Sun.", isSelected: false },
			{caption: "Earth", description: "This is the third planet from the Sun.", isSelected: false },
			{caption: "Mars", description: "This is the fourth planet from the Sun.", isSelected: false },
			{caption: "Jupiter", description: "This is the fifth planet from the Sun.", isSelected: false },
			{caption: "Saturn", description: "This is the sixth planet from the Sun.", isSelected: false },
			{caption: "Uranus", description: "This is the seventh planet from the Sun.", isSelected: false },
			{caption: "Neptune", description: "This is the eighth planet from the Sun.", isSelected: false }
		],
		readOnly: false
	};
	
	switchReadOnly = () => {
		this.setState({
			readOnly: !this.state.readOnly
		});
	}

	selectCard = (caption) => {
	    var cards = this.state.cards.slice();
	    console.log(caption);
	    var selectedCard = cards.find(card => card.caption === caption);
	    selectedCard.isSelected = !selectedCard.isSelected;
	    this.setState({
            cards: cards
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
				        selectCardHandler={this.selectCard }
				    />
				</div>
			</div>
		);
	}
	
}

export default App;
