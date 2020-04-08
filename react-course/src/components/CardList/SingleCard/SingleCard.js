import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from '../Card/Card.module.css';
import CardBody from '../Card/CardBody/CardBody';
import CardHeader from '../Card/CardHeader/CardHeader';
import * as validation from '../../utils/validation';
import * as cardsActions from '../../../reducers/cards/actions';

class SingleCard extends Component {
	state = {
	    editMode: false,
        isCheckboxChecked: false,
        caption: this.props.location.state.caption,
        description: this.props.location.state.description,
        isCaptionValid: true,
        redirect: false
    };

    previousCaption = this.props.location.state.caption;
    previousDescription = this.props.location.state.description;

    onChecked = () => {
        this.setState({ isCheckboxChecked: !this.state.isCheckboxChecked });
    };

    handleCaptionChange = (event) => {
        this.setState({
            caption: event.target.value
        });
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        });
    }

    editCard = () => {
        this.setState({
            editMode: true,
            isCheckboxChecked: false
        });
    }

    saveChanges = () => {
        this.props.updateCardHandler(this.props.match.params.id)(
            this.state.caption,
            this.state.description
        );
        this.setState({
            editMode: false
        });
        this.previousCaption = this.state.caption;
        this.previousDescription = this.state.description;
    }

    cancelChanges = () => {
        this.props.updateCardHandler(this.props.match.params.id)(
            this.previousCaption,
            this.previousDescription
        );
        this.setState({
            caption: this.previousCaption,
            description: this.previousDescription,
            editMode: false,
            isCaptionValid: true
        });
    }

    validateCaption = (isCaptionValid) => {
        this.setState({
            isCaptionValid: isCaptionValid
        });
    }

    render() {
        return (
            <div className={[classes['Card'], this.props.location.state.className].join(' ')}>
                <CardHeader
                    disabled={!this.state.editMode}
                    onChange={this.handleCaptionChange}
                    content={this.state.caption}
                    isCaptionValid={this.state.isCaptionValid}
                    captionValidation={[
                        validation.required
                    ]}
                    validateCaption={this.validateCaption}
                    readOnly={this.props.location.state.readOnly}
                    handleSaveClick={this.saveChanges}
                    handleCancelClick={this.cancelChanges}
                    handleEditClick={this.editCard}
                    onChecked={this.onChecked}
                    isChecked={this.state.isCheckboxChecked}
                />
                <CardBody
                    disabled={!this.state.editMode}
                    onChange={this.handleDescriptionChange}
                    content={this.state.description}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCardHandler: cardId => (newCaption, newDescription) => dispatch(cardsActions.updateCardHandler(cardId)(newCaption, newDescription))
})

export default connect(null, mapDispatchToProps)(SingleCard);