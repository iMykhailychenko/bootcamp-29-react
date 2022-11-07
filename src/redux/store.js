import { composeWithDevTools } from '@redux-devtools/extension';
import axios from 'axios';
import { Status } from 'config';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import { counterInitialState } from './counter/initial-state.counter';
import { counterReducer } from './counter/reducer.counter';

const logger = store => next => action => {
  console.log(action);

  next(action);
};

const reduxThunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch);
    return;
  }

  next(action);
};

// operation / thunk
export const contactsOperation = () => async dispatch => {
  dispatch({ type: 'LOADING' });

  try {
    const responce = await axios.get('https://6368cfc128cd16bba70d1035.mockapi.io/contacts');
    dispatch({ type: 'SUCCESS', payload: responce.data });
  } catch (e) {
    dispatch({ type: 'ERROR', payload: e });
  }
};

// contacts
const contactsInitialState = {
  status: Status.INIT,
  data: [],
};

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...state, status: Status.LOADING };

    case 'SUCCESS':
      return { data: action.payload, status: Status.SUCCESS };

    case 'ERROR':
      return { data: [], status: Status.ERROR };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  contacts: contactsReducer,
});

const initialState = {
  counter: counterInitialState,
  contacts: contactsInitialState,
};

// const next = action => {
//   // -> to next middleware or reducer
// };

// const reduxStore = () => {
//   const store = {};
//   const nextLogger = logger(store);

//   // ....

//   const next = () => {};
//   const actionLogger = nextLogger(next);

//   // ....

//   const action = {};
//   actionLogger(action);
// };

// ----------------------

export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger, reduxThunk)));
