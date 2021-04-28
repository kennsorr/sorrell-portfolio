import React, { useReducer } from 'react';
import contactReducer from './NavMenuReducer.js'
import NavMenuContext from '../navmenu/NavMenuContext';
import {
    TOGGLE_MENU,
  } from '../actions';

export default function NavMenuState(props) {
    const initialState = false

    const [menustate, dispatch] = useReducer(contactReducer, initialState);

    //addcontact
    function toggleMenu() { 
        dispatch({ type: TOGGLE_MENU, payload: !menustate });
    }

    return (
        <NavMenuContext.Provider value={{ menustate: menustate, toggleMenu }}>
            {props.children}
        </NavMenuContext.Provider>
    )
}