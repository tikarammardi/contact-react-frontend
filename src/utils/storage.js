import Cookies from 'universal-cookie';
const cookies = new Cookies();
const ACCESS_TOKEN = 'at';
const SESSION = '';
const ACTIVE = 'session';
const ACTIVE_STATUS = 'activeStatus';

export const getAccessToken = () => {
	if (ACTIVE === SESSION) {
		return window.sessionStorage.getItem(ACCESS_TOKEN);
	}
	return cookies.get(ACCESS_TOKEN);
};

export const setAccessToken = (token) => {
	if (ACTIVE === SESSION) {
		return window.sessionStorage.setItem(ACCESS_TOKEN, token);
	}
	return cookies.set(ACCESS_TOKEN, token, { path: '/' });
};

export const getActiveStatus = () => cookies.get(ACTIVE_STATUS);
export const setActiveStatus = (activeStatus) => cookies.set(ACTIVE_STATUS, activeStatus, { path: '/' });

export const clearCredentials = () => {
	sessionStorage.removeItem(ACCESS_TOKEN);
	cookies.remove(ACCESS_TOKEN, { path: '/' });
	cookies.remove(ACTIVE_STATUS, { path: '/' });
	window.sessionStorage.removeItem('persist:root');
};
