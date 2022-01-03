import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getAccessToken, getActiveStatus } from '../../utils/storage';
// import custom files
import { loginUserAction } from '../../actions/authenticationActions';
import FormLogin from '../Login/Login';
import Spinner from '../Spinner';
function Login(props) {
	const [ rememberMe, setRememberMe ] = useState(false);
	const [ passwordType, setPasswordType ] = useState('password');

	const login = props.login;
	const onLogin = (e) => {
		e.preventDefault();

		const email = e.target.email.value;
		const password = e.target.password.value;
		const rememberme = e.target.rememberme.checked;

		const data = {
			email,
			password
		};

		props.initiateLogin(data);
	};

	const rememberMeChange = (e) => {
		e.preventDefault();
		setRememberMe(!rememberMe);
	};

	const handleShowPassword = (e) => {
		e.preventDefault();
		setPasswordType(passwordType === 'text' ? 'password' : 'text');
	};
	const active = getActiveStatus();
	const accessToken = getAccessToken();
	if (accessToken && active) {
		return <Redirect to="/dashboard" />;
	}
	return (
		<FormLogin
			rememberMeChange={rememberMeChange}
			rememberMe={rememberMe}
			handleLogin={onLogin}
			success={login.isSuccess}
			message={login.message}
			loading={login.loading}
			passwordType={passwordType}
			showPassword={handleShowPassword}
		/>
	);
}

const mapStateToProps = (state) => {
	console.log('mPPING Stage to props', state);
	return {
		login: state.login
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		initiateLogin: (user) => dispatch(loginUserAction(user))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
