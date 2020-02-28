import React, { Component } from 'react';
import './Card.css';
import { MdEdit, MdSave, MdCancel } from 'react-icons/md';
import ContentEditable from 'react-contenteditable'

class Card extends Component {
    state = {
        isCheckboxChecked: false,
        isEditMode: false,
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
            isEditMode: true,
            isCheckboxChecked: false
        });
    }

    saveChanges = () => {
        this.setState({
            isEditMode: false,
            caption: this.temporaryCaption,
            description: this.temporaryDescription
        });
    }

    cancelChanges = () => {
         this.setState({
            isEditMode: false,
         });
    }

    render() {
        let styleClass = this.state.isCheckboxChecked ? 'Card-checked' : 'Card';

        return (
            <div className={styleClass}>
                <div className="Card-header">
                    <ContentEditable
                        disabled={!this.state.isEditMode}
                        onChange={this.handleCaptionChange}
                        html={this.state.caption}
                    />
                    <span>
                        {this.state.isEditMode ? (
                            <React.Fragment>
                                <MdSave
                                    className="Card-icon"
                                    onClick={this.saveChanges}
                                />
                                <MdCancel
                                    className="Card-icon"
                                    onClick={this.cancelChanges}
                                />
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <MdEdit
                                    className="Card-icon"
                                    onClick={this.editCard}
                                />
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
                    disabled={!this.state.isEditMode}
                    onChange={this.handleDescriptionChange}
                    html={this.state.description}
                />
            </div>
        );
    }
}

export default Card;