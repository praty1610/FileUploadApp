import { combineReducers } from 'redux';
import appReducer from '../modules/App/reducer';

const combinedReducers = combineReducers({
    appReducer
});

export default combinedReducers