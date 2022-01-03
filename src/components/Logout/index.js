import React, { useEffect } from 'react';
import { clearCredentials, getAccessToken } from '../../utils/storage';
import Spinner from '../../components/Spinner';

export default function Logout() {
	const logoutUser = () => {
		function removeAllStorage() {
			clearCredentials();
		}

		removeAllStorage();
		if (getAccessToken() === undefined || getAccessToken() === null) {
			window.location = '/';
			return false;
		}
		removeAllStorage();
		setTimeout(() => {
			this.logoutUser();
		}, 100);

		return null;
	};

	useEffect(() => {
		logoutUser();
	}, []);
	return <Spinner greeting="Good Bye. See you again." message="Logging out..." />;
}
