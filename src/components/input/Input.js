import React from 'react';

import classes from './input.module.css';

const AppInput = ({...otherProps}) => {
    return (
        <input autoComplete={'off'} className={classes.input} {...otherProps} />
    );
}

export default AppInput;