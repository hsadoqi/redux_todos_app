import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore} from 'redux'
import listReducer from './reducers/listReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'

const initialState = {}
const store = createStore(listReducer, initialState, composeWithDevTools())
// debugger
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);
