import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';

const CardContext = React.createContext();
const { Provider, Consumer } = CardContext;

class CardsProvider extends Component {
    state = {
        cards: [
            {
                id: uuidv1(),
                caption: "Mercury",
                description: "This is the first planet from the Sun.",
                isSelected: false
            },
            {
                id: uuidv1(),
                caption: "Venus",
                description: "This is the second planet from the Sun.",
                isSelected: false
            },
            {
                id: uuidv1(),
                caption: "Earth",
                description: "This is the third planet from the Sun.",
                isSelected: false
            },
            {
                id: uuidv1(),
                caption: "Mars",
                description: "This is the fourth planet from the Sun.",
                isSelected: false
            },
            {
                id: uuidv1(),
                caption: "Jupiter",
                description: "This is the fifth planet from the Sun.",
                isSelected: false
            },
            {
                id: uuidv1(),
                caption: "Saturn",
                description: "This is the sixth planet from the Sun.",
                isSelected: false
            },
            {
                id: uuidv1(),
                caption: "Uranus",
                description: "This is the seventh planet from the Sun.",
                isSelected: false
            },
            {
                id: uuidv1(),
                caption: "Neptune",
                description: "This is the eighth planet from the Sun.",
                isSelected: false
            }
        ]
    };

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
    };

	submitNewCard = (caption, description) => {
	    this.setState({
	        cards: [
                ...this.state.cards,
                {id: uuidv1(), caption: caption, description: description}
            ]
	    });
	}

    removeSelectedCards = () => {
        this.setState({
            cards: this.state.cards.filter(
                card => !card.isSelected
           )
        });
	}

    render() {
        return (
            <Provider
                value={{
                    cards: this.state.cards,
                    selectCardHandler: this.selectCardHandler,
                    updateCardHandler: this.updateCardHandler,
                    submitNewCard: this.submitNewCard,
                    removeSelectedCards: this.removeSelectedCards
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

export { CardsProvider as Provider, Consumer, CardContext };