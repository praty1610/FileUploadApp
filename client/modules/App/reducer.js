import { LIST_CSV_DATA } from './actions';

const initialState = {
    data : []
}

const appReducer = (state = initialState, action) => {   
    switch(action.type) {
        case LIST_CSV_DATA : {
            return Object.assign({}, state, {data : action.data})
        }
        default : 
            return state
    }    
}

export default appReducer