import React from 'react';
import { BrandLoginLogo } from '../BrandLoginLogo';
import { Form, Button, Col, Row, Alert, InputGroup, FormControl, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginComponent = (props) => {
	return (
		<React.Fragment>
			<Container>
				<div className="row justify-content-center">
					<div className="col-12 col-md-5 col-xl-4 my-5">
						<div className="text-center">
							<BrandLoginLogo className="use-defaults" />
						</div>
						<br />
						{!props.isSuccess && props.message !== '' ? (
							<Alert variant="danger">
								{props.message}. <p />
							</Alert>
						) : null}
						<Form onSubmit={props.handleLogin} className="login-form">
							<Form.Group>
								<Form.Label>Email Address</Form.Label>
								<Form.Control
									name="email"
									type="email"
									placeholder="email@example.com"
									autoFocus
									required
									defaultValue=""
									tabIndex="1"
								/>
							</Form.Group>

							<Form.Group controlId="formLoginPassword">
								<Row>
									<Col>
										<Form.Label>Password</Form.Label>
									</Col>
								</Row>
								<InputGroup className="mb-3">
									<FormControl
										className="form-control-appended"
										name="password"
										type={props.passwordType}
										placeholder="Enter your password"
										required
										defaultValue=""
										tabIndex="2"
									/>
									<InputGroup.Text>
										<i
											className={
												props.passwordType === 'password' ? 'fe fe-eye-off' : 'fe fe-eye'
											}
											onClick={props.showPassword}
										/>
									</InputGroup.Text>
								</InputGroup>
							</Form.Group>

							<Form.Group controlId="formBasicCheckbox">
								<Form.Check
									type="checkbox"
									name="rememberme"
									label="Remember me"
									checked={props.rememberMe}
									onChange={props.rememberMeChange}
								/>
							</Form.Group>

							<div className="d-grid gap-2">
								<Button variant="primary" size="lg" type="submit" disabled={props.loading} tabIndex="3">
									{props.loading && (
										<i className="fa fa-refresh fa-spin" style={{ marginRight: '5px' }} />
									)}
									{props.loading && <span>Signing in...</span>}
									{!props.loading && <span>Sign in</span>}
								</Button>
							</div>
						</Form>
						<div className="text-center">
							<small className="text-muted text-center">
								Don't have an account? <Link href="/signup">Sign Up</Link>
							</small>
						</div>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default LoginComponent;
