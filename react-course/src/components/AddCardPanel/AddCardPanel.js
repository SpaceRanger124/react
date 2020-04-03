import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable';

import classes from './AddCardPanel.module.css';
import CustomInput from '../CustomInput/CustomInput';
import * as validation from '../utils/validation';

class AddCardPanel extends Component {

    state = {
        isInitialState: true,
        isUsernameValid: false
    };

    caption = "";
    description = "";

    validateUsername = (isInputValid) => {
        this.setState({
            isInitialState: false,
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
        let usernameStyle = this.state.isInitialState || this.state.isUsernameValid ? classes['AddCardPanel-ContentEditable'] : classes['AddCardPanel-ContentEditable-disabled'];

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
                            disabled={!this.state.isUsernameValid} >
                            Submit
                        </button>
                    </div>
                </div>
                <div>
                    <CustomInput
                        validation={[
                            validation.required
                        ]}
                        validateInput={this.validateUsername}
                        onChange={this.handleCaptionChange}
                        value={this.caption}
                        className={usernameStyle}
                    />
                    <ContentEditable
                        onChange={this.handleDescriptionChange}
                        html={this.description}
                        className={classes['AddCardPanel-ContentEditable']}
                    />
                    <button onClick={this.props.cancel}>Cancel</button>
                </div>
            </div>
        );
    }

}

export default AddCardPanel;