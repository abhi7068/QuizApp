import React, { useState } from 'react'
import { connect } from "react-redux";
import * as actions from '../../store/actions/actions'
import Input from '../../atoms/Input';
import ButtonSimple from '../../atoms/ButtonSimple';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import AddQuestionsForm from '../../organisms/AddQuestionForm';
import {useHistory} from "react-router-dom";
function AddQuestionsPage() {
    const history=useHistory();
   const goToQuiz=()=>{
       let path=`quiz`;
       history.push(path);
   }
    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <AddQuestionsForm />
            <Grid>
            <ButtonSimple onClick={goToQuiz}>
    Take quiz
</ButtonSimple>
</Grid>
        </Grid >
    )
}
const mapStateToProps = state => ({
    questions: state.quiz,
});



export default connect(
    mapStateToProps)(AddQuestionsPage)