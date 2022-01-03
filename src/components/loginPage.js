import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';

class LoginPage extends Component {
	onHandleLogin = (event) => {
		event.preventDefault();

		let email = event.target.email.value;
		let password = event.target.password.value;

		const data = {
			email,
			password
		};

		this.props.dispatch(loginUserAction(data));
	};

	componentDidMount() {
		document.title = 'React Login';
	}

	render() {
		let isSuccess, message;
		const userData = this.props.response.login;
		console.log('user data', userData);
		if (userData.hasOwnProperty('response')) {
			isSuccess = userData.response.success;
			message = userData.response.message;
			console.log('isSuccess', isSuccess);
			if (isSuccess) {
				const token = userData.response.user.assesToken;
				setCookie('token', token);
			}
		}

		return (
			<div>
				<h3>Login Page</h3>
				{!isSuccess ? <div>{message}</div> : <Redirect to="dashboard" />}
				<form onSubmit={this.onHandleLogin}>
					<div>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" />
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input type="password" name="password" id="password" />
					</div>
					<div>
						<button>Login</button>
					</div>
				</form>
				Don't have account? <Link to="register">Register here</Link>
			</div>
		);
	}
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);
