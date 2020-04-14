import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Home.module.css';
import CardList from '../CardList/CardList';
import AddCardPanel from '../AddCardPanel/AddCardPanel';
import * as cardsActions from '../../reducers/cards/actions';

class Home extends Component {

	state = {
		isAddCardPanelVisible: false
	};

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
		return (
            <div className={classes.Home}>
                <div className={classes['Home-button-block']}>
                    <div>
                        <button onClick={this.props.removeSelectedCards}>
                            Remove selected cards
                        </button>
                        <button onClick={this.addNewCard}>
                            Add a new card
                        </button>
                    </div>
                </div>
                {this.state.isAddCardPanelVisible ? (
                    <AddCardPanel
                        submit={this.submitNewCard(this.props.addCardToList)}
                        cancel={this.cancelNewCard}
                    />
                ) : null}
                <div className={classes['Home-cards']}>
                <CardList
                    readOnly={this.props.readOnly}
                    cards={this.props.cards}
                    selectCardHandler={this.props.selectCardHandler}
                    updateCardHandler={this.props.updateCardHandler}
                />
                </div>
            </div>
		);
	}

}

const mapStateToProps = state => ({
    cards: state.cardsReducer.cards,
    readOnly: state.cardsReducer.readOnly
});

const mapDispatchToProps = dispatch => ({
    addCardToList: (caption, description) => dispatch(cardsActions.addCardToList(caption, description)),
    removeSelectedCards: () => dispatch(cardsActions.removeSelectedCards()),
    selectCardHandler: cardId => () => dispatch(cardsActions.selectCardHandler(cardId)),
    updateCardHandler: cardId => (newCaption, newDescription) => dispatch(cardsActions.updateCardHandler(cardId)(newCaption, newDescription))

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
