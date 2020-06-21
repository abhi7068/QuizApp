import React, { useState } from 'react'
import Input from '../../atoms/Input';
import ButtonSimple from '../../atoms/ButtonSimple';

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import QuizForm from "../../organisms/QuizForm"

function QuizPage() {
   

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
         


              <QuizForm/>

              
            
        </Grid >
    )
}

export default QuizPage