import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkCookie } from '../utils/cookies';
import { getAccessToken, getActiveStatus } from '../utils/storage';
import VerificationPage from '../components/VerificationPage';

const PrivateRoute = ({ component: Component, path, ...rest }) => {
	const accessToken = getAccessToken();
	const active = getActiveStatus();
	console.log('checking access token from ', accessToken, active);

	return (
		<Route
			{...rest}
			render={(props) => {
				if (accessToken !== undefined) {
					if (!active) return <VerificationPage {...props} />;

					return <Component {...props} key={Math.random()} />;
				}
				return <Redirect to="/" />;
			}}
		/>
	);
};

export default PrivateRoute;

/** 
 * 
  const PrivateRoute = ({ component: Component, ...rest }) => {
	const accessToken = getAccessToken();
	console.log('assesstoken', accessToken);
	return (
		<Route
			{...rest}
			render={(props) =>
				accessToken !== null || accessToken !== undefined ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/logout',
							state: { from: props.location }
						}}
					/>
				)}
		/>
	);
};
*/
