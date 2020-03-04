import React, { Component } from 'react';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';

import classes from './Card.module.css';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';

class Card extends Component {
	state = {
	    editMode: false,
        isCheckboxChecked: false,
        caption: this.props.caption,
        description: this.props.description
    };
	
    temporaryCaption = this.state.caption;
    temporaryDescription = this.state.description;

    changeStyles = () => {
        this.setState({ isCheckboxChecked: !this.state.isCheckboxChecked });
        this.props.selectHandler(this.state.caption);
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
        this.setState({
            editMode: false,
            caption: this.temporaryCaption,
            description: this.temporaryDescription
        });
    }

    cancelChanges = () => {
        this.temporaryCaption = this.state.caption;
        this.temporaryDescription = this.state.description;
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
		let saveButton = null;
		let cancelButton = null;
		let editButton = null;
		if (!this.props.readOnly) {
			saveButton = (
				<MdSave
                    className={classes['Card-icon']}
                    onClick={this.saveChanges}
                />
			);
			cancelButton = (
				<MdCancel
                    className={classes['Card-icon']}
                    onClick={this.cancelChanges}
                />
			);
			editButton = (
				<MdEdit
                    className={classes['Card-icon']}
                    onClick={() => this.editCard()}
                />
			);
		}

        return (
            <div className={styleClass}>
                <CardHeader
                    disabled={!this.state.editMode}
                    onChange={this.handleCaptionChange}
                    content={this.state.caption}
                    saveButton={saveButton}
                    cancelButton={cancelButton}
                    editButton={editButton}
                    changeStyles={this.changeStyles}
                    checked={this.state.isCheckboxChecked}
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

export default Card;