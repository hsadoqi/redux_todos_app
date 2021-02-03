import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore} from 'redux'
import listReducer from './reducers/listReducer'
import { composeWithDevTools } from 'redux-devtools-extension' 
import { Provider } from 'react-redux'

const initialState = {lists: [{name: "Grocery", id: 1}, {name: "Code", id: 2}, {name: "Errands", id: 3}]}
const store = createStore(listReducer, initialState, composeWithDevTools())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);
