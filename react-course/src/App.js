import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
	
	state = {
		cards: [
			{caption: "Mercury", description: "This is the first planet from the Sun." },
			{caption: "Venus", description: "This is the second planet from the Sun." },
			{caption: "Earth", description: "This is the third planet from the Sun." },
			{caption: "Mars", description: "This is the fourth planet from the Sun." },
			{caption: "Jupiter", description: "This is the fifth planet from the Sun." },
			{caption: "Saturn", description: "This is the sixth planet from the Sun." },
			{caption: "Uranus", description: "This is the seventh planet from the Sun." },
			{caption: "Neptune", description: "This is the eighth planet from the Sun." }
		],
		readOnly: false
	};
	
	switchReadOnly = () => {
		this.setState({
			readOnly: !this.state.readOnly
		});
	}

	render() {
		const cards = this.state.cards.map((card, index) => {
			return (
				<Card
					caption={card.caption}
					description={card.description}
					readOnly={this.state.readOnly}
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
				<div className="App-cards">
				    {cards}
				</div>
			</div>
		);
	}
	
}

export default App;
