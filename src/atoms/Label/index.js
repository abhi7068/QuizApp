import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

function index({ children, ...rest }) {
    return (
        <InputLabel {...rest}>{children}</InputLabel>
    )
}

export default index