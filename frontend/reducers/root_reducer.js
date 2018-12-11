import  { combineReducers } from 'redux';
import session from './session_reducers';
import entities from './entities_reducer';
import errors from './errors_reducers';

const rootReducer = combineReducers({
    session, 
    entities,
    errors
});

export default rootReducer;