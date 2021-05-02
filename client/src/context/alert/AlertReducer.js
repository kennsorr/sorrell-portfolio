import { SET_ALERT, REMOVE_ALERT } from '../actions';

function Reducer(state, action) {
    
    switch (action.type) {
        
        case SET_ALERT:
            console.log("set ALERT")
            return [...state, action.payload]
            
        case REMOVE_ALERT:
            console.log("REMOVE ALERT");
            console.log("state before is: ", state)
            console.log("payload is: ", action.payload)
            return state.filter((alert) => {
                return alert.id !== action.payload
            })
            
        default:
            break;
    }
} 
export default Reducer;