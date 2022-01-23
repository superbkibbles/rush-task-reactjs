import React from 'react';

const AppError = ({error}) => {
    if (!error) return null;
    return (
        <p>{error}</p>
    );
};

export default AppError;