import { combineReducers } from 'redux';
import signup from './signUpReducer';
import login from './loginReducer';
import contact from './contactReducer';

const rootReducer = combineReducers({
	signup,
	login,
	contact
});

export default rootReducer;
