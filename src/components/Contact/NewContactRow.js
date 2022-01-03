import React from 'react';
import { connect } from 'react-redux';
import { addContactAction } from '../../actions/contactActions';
import { Form, Button } from 'react-bootstrap';

function NewContactRow(props) {
	const handleSubmit = (event) => {
		event.preventDefault();
		const target = event.target;
		const name = target.name.value;
		const phone = target.phone.value;
		const email = target.email.value;

		var contact = {
			name: name,
			phone: phone,
			email: email
		};
		props.addContact(contact);
	};
	return (
		<Form className="form-inline" onSubmit={handleSubmit}>
			<div className="form-group row">
				<div className="col-md-3">
					<input type="text" name="name" className="form-control" id="nameInput" placeholder="Name" />
				</div>
				<div className="col-md-3">
					<input type="text" name="phone" className="form-control" id="phoneInput" placeholder="Phone" />
				</div>
				<div className="col-md-3">
					<input type="email" name="email" className="form-control" id="emailInput" placeholder="Email" />
				</div>
				<div className="col-md-3">
					<Button type="submit" className="btn btn-primary">
						<i className="fa fa-fw fa-plus" />Add
					</Button>
				</div>
			</div>
		</Form>
	);
}

const mapStateToProps = (state) => {
	return {
		contact: state.contact
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addContact: (contact) => dispatch(addContactAction(contact))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewContactRow);
