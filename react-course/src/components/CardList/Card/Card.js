import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Card.module.css';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';
import withLoadingDelay from '../../../hoc/withLoadingDelay';

class Card extends Component {
	state = {
	    editMode: false,
        isCheckboxChecked: false,
        caption: this.props.caption,
        description: this.props.description,
        isCaptionValid: true
    };

    previousCaption = this.props.caption;
    previousDescription = this.props.description;

    onChecked = () => {
        this.setState({ isCheckboxChecked: !this.state.isCheckboxChecked });
        this.props.selectCardHandler();
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
        this.props.updateCardHandler(
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
        this.props.updateCardHandler(
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

    static getDerivedStateFromProps(props, state) {

        if (props.readOnly) {
            state.caption = props.caption;
            state.description = props.description;
            state.isCaptionValid = true;
            state.editMode = false;
        }
        return state
    }

    render() {

        let styleClass = this.state.isCheckboxChecked ? classes['Card-checked'] : classes['Card'];

        const captionValidation = { required: true, validateInput: this.validateCaption };

        return (
            <div className={[styleClass, this.props.className].join(' ')}>
                <CardHeader
                    disabled={!this.state.editMode}
                    onChange={this.handleCaptionChange}
                    content={this.state.caption}
                    isCaptionValid={this.state.isCaptionValid}
                    captionValidation={captionValidation}
                    readOnly={this.props.readOnly}
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

Card.propTypes = {
    className: PropTypes.string.isRequired,
    readOnly: PropTypes.bool.isRequired
};

export default withLoadingDelay(Card);