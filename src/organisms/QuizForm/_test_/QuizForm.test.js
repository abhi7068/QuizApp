import React from 'react'
import { render, cleanup,fireEvent } from  '@testing-library/react';
import '@testing-library/jest-dom';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import  questionReducer from "../../../store/reducers/questionReducer" 
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import QuizForm from '../index';
const store=createStore(questionReducer);
afterEach(cleanup);

 
  it('should take a snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <QuizForm  />
      </Provider>
    );
    expect(
      asFragment(
        render(
          <Provider store={store}>
            <QuizForm  />
          </Provider>
        )
      )
    ).toMatchSnapshot();
  });
  describe("Testing handler", () => {
    test("test", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <Router>
                    <QuizForm />
                </Router>
            </Provider>
        );
        const name = getByTestId("Input");
      // const answer = getByTestId("output");
       // const  = getByTestId("name");
       fireEvent.change(name, { target: { value: "welcome" } });
      // fireEvent.change(answer, { target: { value: "welcome1" } });
        //fireEvent.change(name,{ target: { value: "welcome" } });
        expect(getByTestId("Input").value).toEqual("welcome");
      // expect(answer.value).toEqual("welcome1");
    
    });
     
})