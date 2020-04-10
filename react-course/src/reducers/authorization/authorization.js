import * as types from './actionTypes';

const initialState = {
    loggedIn: false,
    currentUser: undefined,
    isAdmin: false
};

const authorization = (state = initialState, action) => {
    switch (action.type) {
        case types.LOG_IN:
            return {
                loggedIn: true,
                currentUser: action.username,
                isAdmin: action.username === 'testAdmin@gmail.com' && action.password === '12345yuiopp'
            }
        case types.LOG_OUT:
            return {
                loggedIn: false,
                currentUser: undefined,
                isAdmin: false
            }
        default:
            return state
    }
}

export default authorization;