import * as types from './index';

export const addContactAction = (contact) => {
	return {
		type: types.ADD_CONTACT,
		contact
	};
};

export const getContactAction = (contact) => {
	return {
		type: types.FETCH_CONTACT,
		contact
	};
};
export const deleteContactAction = (contact) => {
	return {
		type: types.DELETE_CONTACT,
		contact
	};
};
