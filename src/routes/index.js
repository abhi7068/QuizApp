import React from 'react'
import { Route, Switch } from 'react-router-dom';
import AddQuestionsPage from '../pages/AddQuestionsPage/index';
import QuizPage from '../pages/QuizPage/index'

const Routes = (props) => {
    return (
        <>
            <Switch>
                <Route
                    path="/"
                    component={(props) => <AddQuestionsPage />}
                    exact={true}
                />
                <Route
                    path="/quiz"
                    component={(props) => <QuizPage />}
                    exact={true}
                />
            </Switch>
        </>
    )

}


export default Routes