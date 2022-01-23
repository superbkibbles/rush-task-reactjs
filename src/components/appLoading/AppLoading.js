import React from 'react';
import ReactLoading from "react-loading";

import classes from './appLoading.module.css';

const AppLoading = ({width = '10%', height = '10%', style}) => {
    return (
        <div className={classes.container} style={style}>
            <div className={classes.loading}>
                <ReactLoading  type={'bubbles'} color={'var(--color-primary)'}/>
            </div>
        </div>
    );
};

export default AppLoading;