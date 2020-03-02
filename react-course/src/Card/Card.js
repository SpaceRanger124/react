import React, { Component } from 'react';
import './Card.css';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';
import ContentEditable from 'react-contenteditable'

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
        let styleClass = this.state.isCheckboxChecked ? 'Card-checked' : 'Card';
		let saveButton = null;
		let cancelButton = null;
		let editButton = null;
		if (!this.props.readOnly) {
			saveButton = (
				<MdSave
                    className="Card-icon"
                    onClick={this.saveChanges}
                />
			);
			cancelButton = (
				<MdCancel
                    className="Card-icon"
                    onClick={this.cancelChanges}
                />
			);
			editButton = (
				<MdEdit
                    className="Card-icon"
                    onClick={() => this.editCard()}
                />
			);
		}

        return (
            <div className={styleClass}>
                <div className="Card-header">
                    <ContentEditable
                        disabled={!this.state.editMode}
                        onChange={this.handleCaptionChange}
                        html={this.state.caption}
                    />
                    <span>
                        {this.state.editMode ? (
                            <React.Fragment>
								{saveButton}
								{cancelButton}
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
								{editButton}
                                <input
                                    className="Card-checkbox"
                                    type="checkbox"
                                    checked={this.state.isCheckboxChecked}
                                    onChange={this.changeStyles}
                                />
                            </React.Fragment>
                        )}
                    </span>
                </div>
                <hr />
                <ContentEditable
                    className="Card-text"
                    disabled={!this.state.editMode}
                    onChange={this.handleDescriptionChange}
                    html={this.state.description}
                />
            </div>
        );
    }
}

export default Card;