import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios'
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
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    console.log("AUTH STATE IS: ", state)

    /* Load user (check which user is logged in using the auth point) */
    const loadUser = async () => {
        
    }
    /* Register User */
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users/register', formData, config);
            console.log("SUCESSS")
            console.log("RES DATA IS: ", res.data)
            dispatch({
                type: REGISTER_SUCCESS,
                payload:res.data /* token */
            });
        } catch (err) {
            /* User could be in DB already */
            console.log("ERRORRR")
            console.log("AUTH STATE IS 1: ", state)
            console.log("err: ", err)
            console.log("err.response: ", err.response)
            dispatch({
                type: REGISTER_FAIL,
                payload:err.response.data.errors
            });
            
            console.log("AUTH STATE IS 2: ", state)
        }
    }
    /* Login user */
    const loginUser = async () => {
        
    }
    /* Loggout */
    const logoutUser = async () => {
        
    }
    /* Clear Errors (clear errors in the state) */
    const clearErrors = async () => {
        
    }
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                error: state.error,
                loadUser,
                register,
                loginUser,
                logoutUser,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState