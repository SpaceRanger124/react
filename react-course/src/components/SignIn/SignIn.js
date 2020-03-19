import React from 'react';
import ContentEditable from 'react-contenteditable';

import classes from '../SignIn/SignIn.module.css';

const SignIn = props => {
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
                    <ContentEditable
                        html=""
                        className={classes['SignIn-ContentEditable']}
                    />
                    <ContentEditable
                        html=""
                        className={classes['SignIn-ContentEditable']}
                    />
                </div>
            </div>
            <button className={classes['SignIn-submit']}>Submit</button>
        </div>
    );
}

export default SignIn;