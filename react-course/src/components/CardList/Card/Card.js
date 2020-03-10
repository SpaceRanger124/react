import React, { Component } from 'react';

import classes from './Card.module.css';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';
import WithLoadingDelay from '../../../hoc/WithLoadingDelay';

class Card extends Component {
	state = {
	    editMode: false,
        isCheckboxChecked: false
    };
	
    temporaryCaption = this.props.caption;
    temporaryDescription = this.props.description;

    onChecked = () => {
        this.setState({ isCheckboxChecked: !this.state.isCheckboxChecked });
        this.props.selectHandler();
    };

    handleCaptionChange = (event) => {
        this.temporaryCaption = event.target.value;
    }

    handleDescriptionChange = (event) => {
        this.temporaryDescription = event.target.value;
    }

    editCard = () => {
        this.setState({
            editMode: true,
            isCheckboxChecked: false
        });
    }

    saveChanges = () => {
        this.props.updateCardHandler(
            this.temporaryCaption,
            this.temporaryDescription
        );
        this.setState({
            editMode: false
        });
    }

    cancelChanges = () => {
        this.temporaryCaption = this.props.caption;
        this.temporaryDescription = this.props.description;
		this.setState({
            editMode: false
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (props.readOnly) {
            state.editMode = false;
        }
        return state
    }

    render() {
        let styleClass = this.state.isCheckboxChecked ? classes['Card-checked'] : classes['Card'];

        return (
            <WithLoadingDelay classes={[styleClass, this.props.className].join(' ')}>
                <CardHeader
                    disabled={!this.state.editMode}
                    onChange={this.handleCaptionChange}
                    content={this.props.caption}
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
                    content={this.props.description}
                />
            </WithLoadingDelay>
        );
    }
}

export default Card;