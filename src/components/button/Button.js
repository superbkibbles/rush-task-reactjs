import React from "react";

import classes from "./button.module.css";

const AppButton = ({ title, size, ...otherProps }) => {
  return (
    <a className={classes.btn} style={{ fontSize: size }} {...otherProps}>
      {title}
    </a>
  );
};

export default AppButton;