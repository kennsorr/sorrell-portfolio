import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADDED,
    AUTH_ERROR,
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS 
} from '../actions'

export default (state, action) => {
    console.log("ACTIONS IS :", action);
    switch (action.type) {
        case REGISTER_SUCCESS:
            console.log("REGISTER_SUCCESS")
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading:false
            }
        case REGISTER_FAIL:
            console.log("REGISTER_FAIL")
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAithenticated: false,
                loading: false,
                user: null,
                error:action.payload
            }
        default:
            console.log("Inside reducer, returning default: ", state)
            return state
            break;
    }
}