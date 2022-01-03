import { connect } from 'react-redux';

import { Container, ToggleButtonGroup, Button, Row, Col } from 'react-bootstrap';

import Header from './Header';
import PageHeader from './PageHeader';
import ContactList from './Contact/ContactList';

import React from 'react';

function Dashboard() {
	return (
		<React.Fragment>
			<Header />
			<div className="main-content mt-5">
				<Container fluid>
					<PageHeader section="" title="Dashboard" />
					<ContactList />
				</Container>
			</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({ stats: state.dashboard });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
