import React, { useState } from 'react';
import { BrandLoginLogo } from '../BrandLoginLogo';
import { Form, Button, Col, Row, Alert, InputGroup, FormControl, Container, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getAccessToken, getActiveStatus } from '../../utils/storage';
import isEmail from 'validator/lib/isEmail';
// import custom files
import { signUpUserAction } from '../../actions/authenticationActions';
const SignUp = (props) => {
	const [ passwordType, setPasswordType ] = useState('password');
	const [ errorMessage, setErrorMessage ] = useState('');
	const [ error, setError ] = useState(false);
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ confirmPassword, setConfirmPassword ] = useState('');

	const handleSignUp = (event) => {
		event.preventDefault();
		if (password !== confirmPassword) {
			setError(true);
			setErrorMessage('Password is not matching');
			return;
		}
		const isValid = !isEmail(email);
		setError(isValid);
		isValid && setErrorMessage('Please provide valid email');

		const data = {
			// name,

			email,
			password,
			confirmPassword
		};
		console.log('data befoer here', data);
		props.initateSignUp(data);
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};

	const handleShowPassword = (e) => {
		e.preventDefault();
		setPasswordType(passwordType === 'text' ? 'password' : 'text');
	};
	console.log('props.signup', props.signup);

	return (
		<React.Fragment>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-5 col-xl-4 my-5">
						<div className="text-center">
							<BrandLoginLogo className="use-defaults" />
						</div>
						<br />
						{error && (
							<Alert variant="danger">
								{errorMessage}
								<p />
							</Alert>
						)}
						{props.signup.error && (
							<Alert variant="danger">
								{props.signup.message} <p />
							</Alert>
						)}
						{props.signup.isSuccess === 1 &&
						props.signup.success && (
							<Alert>
								Registration successful, please check your email for verification instructions
							</Alert>
						)}
						<Form onSubmit={handleSignUp} className="signup-form">
							<Form.Group>
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									type="email"
									placeholder="email@example.com"
									autoFocus
									required
									tabIndex="1"
									onChange={(event) => setEmail(event.target.value)}
									value={email}
								/>
							</Form.Group>

							<Form.Group controlId="formSignupPassword">
								<Row>
									<Col>
										<Form.Label>Password</Form.Label>
									</Col>
								</Row>
								<InputGroup className="mb-3">
									<FormControl
										className="form-control-appended"
										type="password"
										placeholder="Enter your password"
										required
										tabIndex="2"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</InputGroup>
							</Form.Group>

							<Form.Group controlId="formSignupConfirmPassword">
								<Row>
									<Col>
										<Form.Label> Confirm Password</Form.Label>
									</Col>
								</Row>
								<InputGroup className="mb-3">
									<FormControl
										className="form-control-appended"
										type={passwordType}
										placeholder="Confirm your password"
										required
										tabIndex="2"
										value={confirmPassword}
										onChange={(e) => setConfirmPassword(e.target.value)}
									/>
									<InputGroup.Text>
										<i
											className={passwordType === 'password' ? 'fe fe-eye-off' : 'fe fe-eye'}
											onClick={handleShowPassword}
										/>
									</InputGroup.Text>
								</InputGroup>
							</Form.Group>

							<div className="d-grid gap-2">
								<Button variant="primary" size="lg" type="submit" disabled={props.loading} tabIndex="3">
									{props.loading && (
										<i className="fa fa-refresh fa-spin" style={{ marginRight: '5px' }} />
									)}
									{props.loading && <span>Signing Up...</span>}
									{!props.loading && <span>Sign Up</span>}
								</Button>
							</div>
						</Form>

						<div className="text-center">
							<small className="text-muted text-center">
								Already have account? <Link to="login">Login here</Link>
							</small>
						</div>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};
const mapStateToProps = (state) => {
	console.log('mPPING stage to props signup', state);
	return {
		signup: state.signup
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		initateSignUp: (user) => dispatch(signUpUserAction(user))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
