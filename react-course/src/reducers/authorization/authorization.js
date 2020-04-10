import * as types from './actionTypes';

const initialState = JSON.parse(localStorage.getItem('authData')) == null ? {
    loggedIn: false,
    currentUser: undefined,
    isAdmin: false
} : JSON.parse(localStorage.getItem('authData'));

const authorization = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case types.LOG_IN:
            newState = {
                loggedIn: true,
                currentUser: action.username,
                isAdmin: action.username === 'testAdmin@gmail.com' && action.password === '12345yuiopp'
            };
            localStorage.setItem('authData', JSON.stringify(newState));
            return newState;
        case types.LOG_OUT:
            newState = {
                loggedIn: false,
                currentUser: undefined,
                isAdmin: false
            };
            localStorage.setItem('authData', JSON.stringify(newState));
            return newState;
        default:
            return state
    }
}

export default authorization;