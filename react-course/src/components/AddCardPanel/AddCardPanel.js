import React, { Component } from 'react';

import classes from './AddCardPanel.module.css';
import CustomInput from '../CustomInput/CustomInput';

class AddCardPanel extends Component {

    state = {
        isUsernameValid: false
    };

    caption = "";
    description = "";

    validateUsername = (isInputValid) => {
        this.setState({
            isUsernameValid: isInputValid
        });
    }

    handleCaptionChange = (event) => {
        this.caption = event.target.value;
    }

    handleDescriptionChange = (event) => {
        this.description = event.target.value;
    }

    submit = () => {
        this.props.submit(this.caption, this.description);
    }

    render() {
        const captionValidation = {
            required: true,
            validateInput: this.validateUsername
        };

        let buttonStyle = this.state.isUsernameValid ? null : classes['AddCardPanel-submit-disabled'];
        let usernameStyle = this.state.isUsernameValid ? classes['AddCardPanel-ContentEditable'] : classes['AddCardPanel-ContentEditable-disabled'];

        return (
            <div className={classes['AddCardPanel']}>
                <div className={classes['AddCardPanel-left']}>
                    <div>
                        <label>Caption:</label>
                    </div>
                    <div>
                        <label>Description:</label>
                    </div>
                    <div>
                        <button
                            onClick={this.submit}
                            className={buttonStyle}
                            disabled={!this.state.isUsernameValid} >
                            Submit
                        </button>
                    </div>
                </div>
                <div>
                    <CustomInput
                        validation={captionValidation}
                        onChange={this.handleCaptionChange}
                        value={this.caption}
                        className={usernameStyle}
                    />
                    <CustomInput
                        onChange={this.handleDescriptionChange}
                        value={this.description}
                        className={classes['AddCardPanel-ContentEditable']}
                    />
                    <button onClick={this.props.cancel}>Cancel</button>
                </div>
            </div>
        );
    }

}

export default AddCardPanel;