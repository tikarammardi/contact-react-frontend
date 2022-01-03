import * as types from './index';

export const signUpUserAction = (user) => {
	return {
		type: types.SIGNUP_USER,
		user
	};
};

export const loginUserAction = (user) => {
	return {
		type: types.LOGIN_USER,
		user
	};
};
export const logoutAction = (user) => {
	return {
		type: types.LOGOUT_USER,
		user
	};
};
