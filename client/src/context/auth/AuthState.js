import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
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

const AuthState = function (props) {
    const initialState = {
        token: localStorage.getItem('token'),
        user:null,
        isAuthenticated: null,
        loading: true,
        error: null,
        successmsg:null
    }
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    console.log("AUTH STATE IS: ", state)

    /* Load user (check which user is logged in using the auth point) */
    const loadUser = async () => {
        //@todo - load toke into global headers
        if(localStorage.token){
            setAuthToken(localStorage.token)
        }
        try {
            const res = await axios.get('/api/auth');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (err) {
            dispatch({type: AUTH_ERROR })
        }
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
            loadUser();
        } catch (err) {
            /* This only occurs when form info fails validation on backend */
            /* if user info is already found in DB, it counts as a success */
            console.log("ERROR/FAIL")
            console.log("RES DATA IS: ", err.response)
            dispatch({
                type: REGISTER_FAIL,
                payload:err.response.data.errors
            });
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
                successmsg:state.successmsg,
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