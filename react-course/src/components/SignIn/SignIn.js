import React, { Component } from 'react';

import classes from './SignIn.module.css';
import CustomInput from '../CustomInput/CustomInput';

class SignIn extends Component {

    state= {
        isUsernameValid: true,
        isPasswordValid: true,
        username: "",
        password: ""
    };

    validateUsername = (isInputValid) => {
        this.setState({
            isUsernameValid: isInputValid
        });
    }

    validatePassword = (isInputValid) => {
        this.setState({
            isPasswordValid: isInputValid
        });
    }

    updateInputValue = (inputField) => (event) => {
        this.setState({
            [inputField]: event.target.value
        });
    }

    render() {
        const usernameValidation = {
            required: true,
            pattern: /\S+@\S+\.\S+/,
            validateInput: this.validateUsername
        };
        const passwordValidation = {
            required: true,
            minLength: 8,
            pattern: /([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/,
            validateInput: this.validatePassword
        };

        let buttonStyle = this.state.isUsernameValid && this.state.isPasswordValid ? classes['SignIn-submit'] : classes['SignIn-submit-disabled'];
        let usernameStyle = this.state.isUsernameValid ? classes["SignIn-CustomInput"] : classes["SignIn-CustomInput-invalid"];
        let passwordStyle = this.state.isPasswordValid ? classes["SignIn-CustomInput"] : classes["SignIn-CustomInput-invalid"];

        return (
            <div>
                <div className={classes['SignIn']}>
                    <div className={classes['SignIn-left']}>
                        <div>
                            <label>Username:</label>
                        </div>
                        <div>
                            <label>Password:</label>
                        </div>
                    </div>
                    <div>
                        <CustomInput
                            validation={usernameValidation}
                            value={this.state.username}
                            onChange={this.updateInputValue("username")}
                            className={usernameStyle}
                        />
                        <CustomInput
                            validation={passwordValidation}
                            value={this.state.password}
                            onChange={this.updateInputValue("password")}
                            className={passwordStyle}
                        />
                    </div>
                </div>
                <button className={buttonStyle} disabled={!this.state.isUsernameValid || !this.state.isPasswordValid}>
                    Submit
                </button>
            </div>
        );
    }
}

export default SignIn;