import * as types from './actionTypes';

export const logIn = (username, password) =>
    dispatch => {
        console.log('logged in:');
        console.log('username: ' + username);
        console.log('password: ' + password);
        dispatch({
            type: types.LOG_IN,
            username: username,
            password: password
        });
    }

export const  logOut = () =>
    dispatch => {
        console.log('logged out.');
        dispatch({
            type: types.LOG_OUT
        });
    }