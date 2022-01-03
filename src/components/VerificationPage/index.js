import { Alert, Nav } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Spinner from '../Spinner';

export default function VerificationPage(props) {
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	const [ errorMessage, setErrorMessage ] = useState('');
	const [ verification, setVerification ] = useState(false);

	const base64Data = props.match.params.code;

	let base64ToString = Buffer.from(base64Data, 'base64').toString();
	base64ToString = base64ToString.split(',');

	const initiateVerification = async (data) => {
		try {
			setLoading(true);
			const LOGIN_API_ENDPOINT = 'http://localhost:5000/users/activate';

			const parameters = {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			};

			const res = await fetch(LOGIN_API_ENDPOINT, parameters);

			const response = await res.json();
			console.log('response after verification json', response);
			if (response.status !== 200) {
				setError(true);
				setErrorMessage(response.message || 'Something went wrong. Please try again!');
				setLoading(false);
				return;
			}
			setVerification(true);
			setLoading(false);
		} catch (error) {
			console.log('Error is', error);
			setError(true);
			setErrorMessage(error.message);
			setLoading(false);
		}
	};
	useEffect(() => {
		const data = {
			email: base64ToString[0],
			code: base64ToString[1]
		};
		initiateVerification(data);
	}, []);

	if (error) {
		return <Alert>{errorMessage}</Alert>;
	}
	if (verification) {
		return (
			<div className="text-center">
				<small className="text-muted text-center">
					Account Verified <Nav.Link href="/login">Login here</Nav.Link>
				</small>
			</div>
		);
	}
	return <Spinner message={'Please wait while we verify your email'} />;
}
