import axios from 'axios';

const BASE_URL = 'http://localhost:5000';
export const loginUserService = async (data) => {
	try {
		const LOGIN_ENDPOINT = `${BASE_URL}/users/login`;
		console.log('data sending to server', data);
		const response = await axios.post(LOGIN_ENDPOINT, data);
		console.log('response is =================>', response);
		return response.data;
	} catch (error) {
		console.log('error message is', error);
		return error;
	}
};

export const loggedIn = (token) => {
	return !!token && !this.isTokenExpired(token);
};

export const setToken = (token) => {
	localStorage.setItem('token', token);
};
