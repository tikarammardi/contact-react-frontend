import * as types from '../actions';
const initialState = [
	{
		_id: '61d06aed930e1340441a8902',
		full_name: 'Tikaram Mardi',
		email: 'hellocat@gmail.com',
		phone: 2345667565,
		user_id: '635535d9-eb07-44ee-8810-00bb2b41f384',
		created_date: '2022-01-01T14:53:33.584Z',
		__v: 0
	},
	{
		_id: '61d06aed930e1340441a8903',
		full_name: 'Tikaram Mardi',
		email: 'hellocat@gmail.com',
		phone: 2345667565,
		user_id: '635535d9-eb07-44ee-8810-00bb2b41f384',
		created_date: '2022-01-01T14:53:33.584Z',
		__v: 0
	},
	{
		_id: '61d06aed930e1340441a8904',
		full_name: 'Tikaram Mardi',
		email: 'hellocat@gmail.com',
		phone: 2345667565,
		user_id: '635535d9-eb07-44ee-8810-00bb2b41f384',
		created_date: '2022-01-01T14:53:33.584Z',
		__v: 0
	},
	{
		_id: '61d06aed930e1340441a8905',
		full_name: 'Tikaram Mardi',
		email: 'hellocat@gmail.com',
		phone: 2345667565,
		user_id: '635535d9-eb07-44ee-8810-00bb2b41f384',
		created_date: '2022-01-01T14:53:33.584Z',
		__v: 0
	}
];

const s = [
	{ key: 1, name: 'Tom Jackson', phone: '555-444-333', email: 'tom@gmail.com' },
	{ key: 2, name: 'Mike James', phone: '555-777-888', email: 'mikejames@gmail.com' },
	{ key: 3, name: 'Janet Larson', phone: '555-222-111', email: 'janetlarson@gmail.com' },
	{ key: 4, name: 'Clark Thompson', phone: '555-444-333', email: 'clark123@gmail.com' },
	{ key: 5, name: 'Emma Page', phone: '555-444-333', email: 'emma1page@gmail.com' }
];
export default function contactReducer(state = initialState, action) {
	console.log('action is', action);
	const response = action.response;
	switch (action.type) {
		case types.FETCH_CONTACT: {
			return {
				...state,
				...response.data,
				loading: false
			};
		}

		case types.ADD_CONTACT:
			return {
				...state,
				loading: false
			};

		case types.DELETE_CONTACT:
			return {
				...state,
				loading: false
			};
		default:
			return state;
	}
}
