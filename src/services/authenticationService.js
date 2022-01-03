export const registerUserService = async (request) => {
	const REGISTER_API_ENDPOINT = 'http://localhost:5000/users/signup';

	const parameters = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(request.user)
	};

	const response = await fetch(REGISTER_API_ENDPOINT, parameters);
	return response.json();
};

export const loginUserService = async (request) => {
	const LOGIN_API_ENDPOINT = 'http://localhost:5000/users/login';

	const parameters = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(request.user)
	};

	const response = await fetch(LOGIN_API_ENDPOINT, parameters);
	return response.json();
};
