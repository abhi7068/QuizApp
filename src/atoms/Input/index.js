import React from 'react';
import TextField from '@material-ui/core/TextField';

function Input({ ...rest }) {
    return <TextField {...rest} />;
}

export default Input;