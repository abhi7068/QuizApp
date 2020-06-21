import React from 'react'

function RadioButtons() {
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Questions</FormLabel>
            <RadioGroup name="question" value={value} onChange={handleChange}>
               
                <FormControlLabel  id="radio"   inputProps={{ "data-testid": " " }} value="disabled" disabled control={<Radio />} label="(Disabled option)" />
            </RadioGroup>
        </FormControl>
    )
}

export default RadioButtons