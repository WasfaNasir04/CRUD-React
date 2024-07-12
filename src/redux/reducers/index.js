import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import authReducers from './authReducers';

const rootReducer = combineReducers({
  courses: courseReducer,
  auth: authReducers
});

export default rootReducer;
