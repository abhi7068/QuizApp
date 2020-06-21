import React, { useState } from 'react'
import Input from '../../atoms/Input';
import ButtonSimple from '../../atoms/ButtonSimple';

import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import { connect } from "react-redux";
import { TextField } from '@material-ui/core';

function AddQuestionsForm({ questions }) {
    const [value, setValue] = useState()
    const [result, setResult] = useState(0)
    const [show, setShow] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setShow(true)
    }


    const handleChangeRadio = (e, index) => {
        const answer = e.target.value;
        if (questions[index].correct === answer) {
            setResult(prevState => prevState + 1)
        }
    }


    return (
        <>
            {questions.length > 0 ?
                (
                    <>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <form>
                                {
                                    questions && questions.map((question, index) => (
                                        <Grid key={index} style={{ marginTop: '30px' }}>
                                            <Grid style={{ marginTop: '30px' }}>
                                                <Input name="question.question"

                                                    type="text"
                                                    value={question.question}

                                                    required
                                                />
                                            </Grid>

                                            <Grid style={{ marginTop: '30px' }}>
                                                {question.answers.length > 0 && <FormControl component="fieldset">
                                                    <FormLabel component="legend">Answers</FormLabel>
                                                    <RadioGroup inputProps={{ "data-testid": "Input" }} name="answer" onChange={(e) => handleChangeRadio(e, index)}>
                                                        {
                                                            question.answers.map((answer, id) => (
                                                                console.log(question),
                                                                <FormControlLabel key={id}
                                                                    value={answer.aid} control={<Radio />} label={answer.a} />
                                                            ))
                                                        }
                                                       
                                                    </RadioGroup>
                                                </FormControl>}
                                            </Grid>


                                        </Grid>
                                    ))
                                }

                                <Grid style={{ marginTop: '50px' }}>
                                    <ButtonSimple type="submit" onClick={handleSubmit} variant="contained" color="primary">
                                        Submit
            </ButtonSimple>
                                </Grid>
                            </form>
                        </Grid >

                        <Grid>
                            {show && <h4>Result: {result} </h4>}
                        </Grid>
                    </>)


                :
                (<h2>No questions available</h2>)
            }


        </>
    )
}


const mapStateToProps = state => ({
    questions: state.quiz
});


export default connect(
    mapStateToProps)(AddQuestionsForm)
