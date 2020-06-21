import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import questionReducer from '../src/store/reducers/questionReducer'
const store=createStore(questionReducer,applyMiddleware())
test('renders learn react link', () => {
   render(
    <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>)
 
});
