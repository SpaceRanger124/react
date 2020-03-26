import React, { Component } from 'react';
import { v1 as uuidv1 } from 'uuid';
import axios from 'axios';

const CardContext = React.createContext();
const { Provider, Consumer } = CardContext;

class CardsProvider extends Component {
    state = {
        cards: []
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

	addCardToList = (caption, description) => {
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

	componentDidMount() {
	    axios.get('https://raw.githubusercontent.com/BrunnerLivio/PokemonDataGraber/master/output.json')
	        .then(response => {
                const cards = response.data.slice(0, 15);
                const processedCards = cards.map(card => {
                    return {
                        id: card.Number,
                        caption: card.Name,
                        description: card.About
                    }
                });

                this.setState({
                    cards: processedCards
                });
	        });
	}

    render() {
        return (
            <Provider
                value={{
                    cards: this.state.cards,
                    selectCardHandler: this.selectCardHandler,
                    updateCardHandler: this.updateCardHandler,
                    addCardToList: this.addCardToList,
                    removeSelectedCards: this.removeSelectedCards
                }}
            >
                {this.props.children}
            </Provider>
        )
    }
}

export { CardsProvider as Provider, Consumer, CardContext };