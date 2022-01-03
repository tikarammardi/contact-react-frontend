import { takeLatest } from 'redux-saga/effects';
import { registerSaga, loginSaga } from './authenticationSaga';

import * as types from '../actions';

export default function* watchUserAuthentication() {
	yield takeLatest(types.SIGNUP_USER, registerSaga);
	yield takeLatest(types.LOGIN_USER, loginSaga);
}
