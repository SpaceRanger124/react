import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
	
	state = {
		cards: [
			{caption: "Mercury", description: "This is the first planet from the Sun.", editMode: false },
			{caption: "Venus", description: "This is the second planet from the Sun.", editMode: false },
			{caption: "Earth", description: "This is the third planet from the Sun.", editMode: false },
			{caption: "Mars", description: "This is the fourth planet from the Sun.", editMode: false },
			{caption: "Jupiter", description: "This is the fifth planet from the Sun.", editMode: false },
			{caption: "Saturn", description: "This is the sixth planet from the Sun.", editMode: false },
			{caption: "Uranus", description: "This is the seventh planet from the Sun.", editMode: false },
			{caption: "Neptune", description: "This is the eighth planet from the Sun.", editMode: false }
		],
		readOnly: false
	};
	
	switchReadOnly = () => {
		const cards = this.state.cards.slice();
		for(let i = 0; i < cards.length; i++) {
			cards[i].editMode = false;
		}
		this.setState({
			cards: cards,
			readOnly: !this.state.readOnly
		});
	}
	
	switchEditMode = (index) => {
		const cards = this.state.cards.slice();
		cards[index].editMode = !cards[index].editMode;
		this.setState({
			cards: cards
		});
	}
	
	render() {
		const cards = this.state.cards.map((card, index) => {
			return (
				<Card
					caption={card.caption}
					description={card.description}
					readOnly={this.state.readOnly}
					editMode={card.editMode}
					switchEditMode={() => this.switchEditMode(index)}
					key={index}
				/>
			);
		});
		return (
			<div className="App">
				<header className="App-header">
					The Solar System
				</header>
				<input
					className="App-checkbox"
                    type="checkbox"
					checked={this.state.readOnly}
					onChange={this.switchReadOnly}
                />
				<span className="App-checkbox-label">Read only</span>
				{cards}
			</div>
		);
	}
	
}

export default App;
