import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PrivateRoute from './privateRoute';

import DashboardPage from '../components/dashboardPage';
import Logout from '../components/Logout';
import Login from '../components/Login';
import SignUp from '../components/Signup';
import VerificationPage from '../components/VerificationPage';
import NotFound from '../components/NotFound';
// import ContactList from '../components/Contact/ContactList';
const App = (props) => {
	const { state } = props;
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Login} {...state} />
				<Route path="/login" component={Login} {...state} />
				<Route path="/logout" component={Logout} />
				<Route path="/signup" component={SignUp} {...state} />
				<Route path="/verify/:code" component={VerificationPage} {...state} />
				{/* <Route path="/contact/add" component={ContactAdd} {...state} /> */}
				{/* <Route path="/contact" component={ContactList} {...state} /> */}
				<PrivateRoute path="/dashboard" component={DashboardPage} {...state} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
