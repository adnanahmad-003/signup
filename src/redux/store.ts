import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './slices/userSlice';
import userSaga from './sagas/userSaga';

// Initialize Saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer, // Add user slice reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});

// Run the saga middleware
sagaMiddleware.run(userSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
