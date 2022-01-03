import React from 'react';
import NewContactRow from './NewContactRow';
import { connect } from 'react-redux';
import { Container, Button, Table } from 'react-bootstrap';
import { getContactAction, deleteContactAction, addContactAction } from '../../actions/contactActions';

const ContactRow = (props) => {
	return (
		<tr>
			<td>{props.contact.full_name}</td>
			<td>{props.contact.phone}</td>
			<td>{props.contact.email}</td>
			<Button variant="primary" size="lg" onClick={props.handleDelete}>
				{' '}
				Delete
			</Button>
		</tr>
	);
};
const ContactTable = (props) => {
	const rows = [];
	props.contacts.forEach((contact) => {
		rows.push(<ContactRow key={contact._id} contact={contact} />);
	});
	return (
		<Table>
			<thead>
				<tr>
					<th>
						<i className="fas fa-fw fa-user" />Name
					</th>
					<th>
						<i className="fas fa-fw fa-phone" />Phone
					</th>
					<th>
						<i className="fas fa-fw fa-envelope" />Email
					</th>
				</tr>
			</thead>
			<tbody>{rows}</tbody>
		</Table>
	);
};

function ContactList(props) {
	return (
		<Container>
			<h1>React Contacts List App</h1>
			<NewContactRow addContact={props.addContact} />
			<ContactTable contacts={props.contact} />
		</Container>
	);
}

const mapStateToProps = (state) => {
	return {
		contact: state.contact
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addContact: (contact) => dispatch(addContactAction(contact)),
		deleteContact: (contact) => dispatch(deleteContactAction(contact)),
		getContact: (contact) => dispatch(getContactAction(contact))
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
