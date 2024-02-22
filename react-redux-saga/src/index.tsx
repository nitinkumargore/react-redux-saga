import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import todoListRootSaga from './sagas/todoListSaga';

import todoListReducer from './store/todoListSlice';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer:{
    todoList:todoListReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(todoListRootSaga);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
