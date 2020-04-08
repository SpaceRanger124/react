import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import classes from './Home.module.css';
import CardList from '../CardList/CardList';
import AddCardPanel from '../AddCardPanel/AddCardPanel';
import * as cardsActions from '../../reducers/cards/actions';

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
                    readOnly={this.state.readOnly}
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
    cards: state
})

const mapDispatchToProps = dispatch => ({
    addCardToList: (caption, description) => dispatch(cardsActions.addCardToList(caption, description)),
    removeSelectedCards: () => dispatch(cardsActions.removeSelectedCards()),
    selectCardHandler: cardId => () => dispatch(cardsActions.selectCardHandler(cardId)()),
    updateCardHandler: cardId => (newCaption, newDescription) => dispatch(cardsActions.updateCardHandler(cardId)(newCaption, newDescription))

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
