import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
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

const AuthState = function (props) {
    const initialState = {
        token: localStorage.getItem('token'),
        user:null,
        isAuthenticated: null,
        loading: true,
        error: null
    }
}

const [state, dispatch] = useReducer(AuthReducer);

//Load user (check which user is logged in using the auth point)

//register user

//Login user

//Loggout

//Clear Errors (clear errors in the state)

return (
    <AuthContext.Provider
        value={{
            token: state.token,
            user:state.user,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            error: state.error
        }}
    >
        {props.children}
    </AuthContext.Provider>
)