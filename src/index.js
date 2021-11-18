import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducers from './store/index'
import PagesRouter from './pages/PageRouter';
import PagesLinks from './pages/PageLinks';
import { BrowserRouter} from "react-router-dom";

let store =createStore(combineReducers)

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
      <PagesLinks />
       <PagesRouter />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
