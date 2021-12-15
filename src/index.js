import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import listReducer from './reducers/listReducer'
import itemReducer from './reducers/itemReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"

const initialState = {}

const rootReducer = combineReducers({
  lists: listReducer, 
  items: itemReducer
})

const store = createStore(rootReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))
debugger

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);
