import React from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({

}));

function ButtonSimple({ children, ...rest }) {
    const classes = useStyles();
    return (
        <Button
            {...rest}
        >
            {children}
        </Button>
    );
}

export default ButtonSimple;