import * as types from '../actions';
import { setAccessToken, setActiveStatus } from '../utils/storage';

const initialState = {
	isSuccess: 0,
	loading: false,
	message: ''
};

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case types.LOGIN_USER:
			return { ...state, loading: true };

		case types.LOGIN_USER_SUCCESS: {
			const { response } = action;
			console.log('LOGIN RESPONSE COMING FROM SERVER ', response);
			const { accessToken, active } = response.data;

			console.log('assesstoken', accessToken);

			setAccessToken(accessToken);
			setActiveStatus(active);
			return {
				...state,
				isSuccess: 1,
				loading: false,
				...response.data
			};
		}

		case types.LOGIN_USER_ERROR: {
			const { response } = action;
			return {
				...state,
				isSuccess: 0,
				loading: false,
				message: response.message
			};
		}

		default:
			return state;
	}
}

/*
export default function(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};

*/
