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
    checkboxLastState = this.state.isCheckboxChecked;

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
        this.checkboxLastState = this.state.isCheckboxChecked;
        this.setState({
            isEditMode: true,
            isCheckboxChecked: false
        });
    }

    saveChanges = () => {
        this.setState({
            isEditMode: false,
            isCheckboxChecked: this.checkboxLastState,
            caption: this.temporaryCaption,
            description: this.temporaryDescription
        });
    }

    cancelChanges = () => {
         this.setState({
            isEditMode: false,
            isCheckboxChecked: this.checkboxLastState,
            caption: this.state.caption,
            description: this.state.description
         });
    }

    render() {
        let styleClass = this.state.isCheckboxChecked ? 'Card-checked' : 'Card';
        let editButtonStyle =  {
            marginRight: '20px',
            display: this.state.isEditMode ? 'none' : 'inline'
        };
        let saveCancelButtonStyle =  {
            marginRight: '20px',
            display: this.state.isEditMode ? 'inline' : 'none'
        };

        return (
            <div className={styleClass}>
                <div className="Card-header">
                    <ContentEditable
                        disabled={!this.state.isEditMode}
                        onChange={this.handleCaptionChange}
                        html={this.state.caption}
                    />
                    <span>
                        <MdSave
                            style={saveCancelButtonStyle}
                            onClick={this.saveChanges}
                        />
                        <MdCancel
                            style={saveCancelButtonStyle}
                            onClick={this.cancelChanges}
                        />
                        <MdEdit
                            style={editButtonStyle}
                            onClick={this.editCard}
                        />
                        <input
                            type="checkbox"
                            className="Card-checkbox"
                            style={{display: this.state.isEditMode ? 'none' : 'inline'}}
                            onChange={this.changeStyles}
                        />
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