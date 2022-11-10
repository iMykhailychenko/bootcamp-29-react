import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { App } from './App';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
