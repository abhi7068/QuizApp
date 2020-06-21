import React, { useState } from 'react'
import Input from '../../atoms/Input';
import ButtonSimple from '../../atoms/ButtonSimple';
import {withRouter,Link} from "react-router-dom";
import { connect } from "react-redux";
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import * as actions from '../../store/actions/actions';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField } from '@material-ui/core';

function AddQuestionsForm(props) {
    const [question, setQuestion] = useState("")
    const [answers, setAnswers] = useState([])
    const [counter, setCounter] = useState(0);
    const [correct, setCorrect] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();
        const quest = { 
            question, answers:answers, correct: correct
        }
        props.addQuestion(quest)
        setAnswers([]);
        setQuestion('')
    }

    const handleAddOption = (e) => {
        setAnswers(prevState => {
            return [...prevState, { aid: `a${counter}`, a: '' }]
        })
        setCounter(prevState => prevState + 1)

    }
 const handleChange = (e) => {
        setQuestion(e.target.value)
     
    }

    const handleChangeRadioLabel = (e, index) => {
        setAnswers(prevState => {
  prevState[index].a = e.target.value
            return prevState
        })
    }

    const handleChangeRadio = (e) => {
        setCorrect(e.target.value)
    }

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <form>
                <Grid>
                    <TextField name="question"
                     inputProps={{ "data-testid": "Input" }}
                     id="content"
                     
                        label="Add Question"
                        type="text"
                        value={question}
                        onChange={handleChange}
                        required
                    />
                </Grid>
                <br />
                <br />
                <Grid>
                    <ButtonSimple variant="contained" color="primary" onClick={handleAddOption}
                        disabled={!question}>
                        Add Option
                    </ButtonSimple>
                </Grid>
                <br /><br />
                <Grid>
                    {answers.length > 0 && <FormControl component="fieldset">
                        <FormLabel component="legend">Answers</FormLabel>
                        <RadioGroup type="radio" inputProps={{ "data-testid": "output" }} name="answer" onChange={handleChangeRadio}>
                            {
                                answers.map((answer, index) => (
                                    <FormControlLabel key={index} inputProps={{ "data-testid": "output" }} value={answer.aid} control={<Radio />} label={
                                        <TextField 
                                        inputProps={{ "data-testid": "output" }}
                        
                                        onChange={(event) => handleChangeRadioLabel(event, index)} />
                                    } />
                                ))
                            }
                        </RadioGroup>
                    </FormControl>}
                </Grid>
                <br />
                <br />
                <Grid>
            
          <ButtonSimple disabled={!correct} 
          variant="contained" color="primary" type="submit" onClick={handleSubmit}>
                        Submit
            </ButtonSimple>
            <br/>
            <br/>

                </Grid>
            </form>
        </Grid >
    )
}


const mapDispatchToProps = dispatch => ({
     addQuestion: (question) => dispatch(actions.addQuestion(question))
});

export default connect(
    null,
    mapDispatchToProps)(AddQuestionsForm)