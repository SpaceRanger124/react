import * as types from './actionTypes';

export const logIn = (username, password) => ({
    type: types.LOG_IN,
    username: username,
    password: password
});

export const  logOut = () => ({
    type: types.LOG_OUT
});