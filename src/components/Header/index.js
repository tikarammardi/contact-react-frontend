import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { withRouter } from 'react-router';

function Header() {
	return (
		<React.Fragment>
			<Navbar expand="md" className="navbar-vertical fixed-left navbar-light navbar-light navbar-expand-md">
				<Container fluid>
					<Navbar.Brand href="/dashboard">{process.env.REACT_APP_BRAND_NAME}</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<div>
							<Nav className="mr-auto">
								<Nav.Link href="/logout">
									<span className="fe fe-arrow-left-circle" /> Logout
								</Nav.Link>

								{/* <Nav.Link href="/update-password">
									<span className="fe fe-lock" />
									Update Password
								</Nav.Link> */}
							</Nav>
							<hr className="navbar-divider my-3" />
							<Nav>
								<Nav.Link target="_blank" href={process.env.REACT_APP_BRAND_SUPPORT}>
									<span className="fe fe-life-buoy" />
									Support
								</Nav.Link>
							</Nav>
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => {
	return {
		common: state.common
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		// dispatching plain actions
		//   logOut: () => dispatch({ type: 'USER_LOGOUT' }),
		//   darkMode: () => dispatch({ type: 'DARK_MODE' }),
		//   lightMode: () => dispatch({ type: 'LIGHT_MODE' }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
