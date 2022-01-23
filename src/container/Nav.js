import React from "react";

import classes from "./nav.module.css";
import logo from "../assets/img/whiteLogo.png";
import userPic from "../assets/img/user.png";

export default function Nav() {
  return (
    <div className={classes.container}>
      <div className={classes.nav}>
        <div style={{flex: 1}}>
          <img src={logo} alt="logo" width={100} />
        </div>
        <div style={{ flex: 1.5, display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="/" className={classes.nav__item} style={{borderBottom: '2px solid #fff'}}>Orders</a>
          <a href="/" className={classes.nav__item}>Dashboard</a>
          <a href="/" className={classes.nav__item}>Products</a>
          <a href="/" className={classes.nav__item}>Discount</a>
          <a href="/" className={classes.nav__item}>Reviews</a>
          <a href="/" className={classes.nav__item}>Notofications</a>
          <img src={userPic} alt="logo" width={50} />
        </div>
      </div>
    </div>
  );
}
