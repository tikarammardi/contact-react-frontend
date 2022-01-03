import * as types from '../actions';

const initialState = {
	isSuccess: 0,
	loading: false,
	message: ''
};

export default function signUpReducer(state = initialState, action) {
	console.log('action is', action);
	const response = action.response;
	switch (action.type) {
		case types.SIGNUP_USER_SUCCESS: {
			let success = response.success ? 1 : 0 || response.error ? 0 : 1;

			return {
				...state,
				isSuccess: success,
				loading: false,
				...response
			};
		}

		case types.SIGNUP_USER_ERROR:
			return {
				...state,
				isSuccess: 0,
				loading: false,
				...response
			};
		default:
			return state;
	}
}

/*

export default function(state = [], action) {
  let response = action.response;

  switch(action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { ...state, response };
    case types.REGISTER_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}

*/
