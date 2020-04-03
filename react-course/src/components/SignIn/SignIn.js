import React, { Component } from 'react';

import classes from './SignIn.module.css';
import CustomInput from '../CustomInput/CustomInput';
import * as validation from '../utils/validation';

class SignIn extends Component {

    state= {
        isInitialState: true,
        isUsernameValid: false,
        isPasswordValid: false,
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
            isInitialState: false,
            [inputField]: event.target.value
        });
    }

    render() {
        let usernameStyle = this.state.isUsernameValid || this.state.isInitialState ? classes["SignIn-CustomInput"] : classes["SignIn-CustomInput-invalid"];
        let passwordStyle = this.state.isPasswordValid || this.state.isInitialState ? classes["SignIn-CustomInput"] : classes["SignIn-CustomInput-invalid"];

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
                            validation={[
                                validation.required,
                                validation.pattern(
                                    /\S+@\S+\.\S+/
                                )
                            ]}
                            validateInput={this.validateUsername}
                            value={this.state.username}
                            onChange={this.updateInputValue("username")}
                            className={usernameStyle}
                        />
                        <CustomInput
                            validation={[
                                validation.required,
                                validation.minLength(8),
                                validation.pattern(
                                    /([A-Za-z]+[0-9]|[0-9]+[A-Za-z])[A-Za-z0-9]*/
                                )
                            ]}
                            validateInput={this.validatePassword}
                            value={this.state.password}
                            onChange={this.updateInputValue("password")}
                            className={passwordStyle}
                        />
                    </div>
                </div>
                <button className={classes["SignIn-submit"]} disabled={!this.state.isUsernameValid || !this.state.isPasswordValid}>
                    Submit
                </button>
            </div>
        );
    }
}

export default SignIn;