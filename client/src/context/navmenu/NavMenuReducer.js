import {
    TOGGLE_MENU,
} from '../actions';
  
export default function(state, action) {
    switch (action.type) {
        case TOGGLE_MENU:
            return action.payload
            // return {
            //     ...state,
            //     contacts: [...state.contacts, action.payload]
            // }
        default:
            console.log("DEFAULT")
            return state
    }
    
}