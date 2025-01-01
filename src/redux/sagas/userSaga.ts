import {takeEvery, put} from 'redux-saga/effects';
import {setUser, clearUser} from '../slices/userSlice';
import {USER_SAGA_ACTIONS} from '../actions/userActions';

interface SignInAction {
  type: string;
  payload: {username: string; password: string};
}

function* signInSaga(action: SignInAction) {
  try {
    const userData = action.payload;
    yield put(setUser(userData));
  } catch (error) {
    console.error('Error signing in:', error);
  }
}

function* signOutSaga() {
  try {
    yield put(clearUser());
  } catch (error) {
    console.error('Error signing out:', error);
  }
}

export default function* userSaga() {
  yield takeEvery(USER_SAGA_ACTIONS.USER_SIGN_IN, signInSaga);
  yield takeEvery(USER_SAGA_ACTIONS.USER_SIGN_OUT, signOutSaga);
}
