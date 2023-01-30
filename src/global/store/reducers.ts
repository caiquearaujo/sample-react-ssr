import { combineReducers } from 'redux';
import usersReducer from './users';
import authReducer from './auth';
import adminsReducer from './admins';

export default combineReducers({
	users: usersReducer,
	auth: authReducer,
	admins: adminsReducer,
});
