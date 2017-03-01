import { combineReducers } from 'redux';
import EndPointReducer from './reducer_endPoints';

const rootReducer = combineReducers({
    endPoint: EndPointReducer
});

export default rootReducer;
