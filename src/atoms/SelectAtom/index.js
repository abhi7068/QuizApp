import React from 'react'

import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

function index({ children, ...rest }) {
   return (
        <Select
            {...rest}
        >
            {children}
        </Select>
    )
}

export default index;