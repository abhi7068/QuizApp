import React from 'react'
import QuizPage from '../../QuizPage/index'
import {render,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import questionReducer from '../../../store/reducers/questionReducer'
import {BrowserRouter as Router,withRouter} from 'react-router-dom';
const store= createStore(questionReducer);
afterEach(cleanup);
it('matches snapshot',()=>{
const {asFragment} = render(
<Provider store={store}>
          <Router>
           <QuizPage />
        </Router>
      </Provider>
    );
expect(asFragment()).toMatchSnapshot();
});
 
it('it renders',()=>{
render(
<Provider store = {store}>
          <Router>
       <QuizPage/>
        </Router>
      </Provider>
  );
});

