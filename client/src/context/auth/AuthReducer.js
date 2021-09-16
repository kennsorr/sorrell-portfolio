import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
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
                loading:false,
                error:null,
                successmsg: action.payload.msg
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
            console.log("REGISTER_FAIL")
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAithenticated: false,
                loading: false,
                user: null,
                error: null
            }
        case USER_LOADED:
            console.log(action)
            console.log("setting isAuthenticated to true")
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        default:
            console.log("Inside reducer, returning default: ", state)
            return state
            break;
    }
}