import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./login.module.css";
import delievery from "../../assets/img/delievery.png";
import logo from "../../assets/img/logo.png";
import useTitle from "../../hooks/useTitle";
import AppInput from "../../components/input/Input";
import AppButton from "../../components/button/Button";
import AppError from "../../components/error/Error";
import { loginUser } from "../../actions";
import userApi from "../../api/user";

const LoginPage = ({ token, history, loginUser }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useTitle("Login");

  useEffect(() => {
    if (token) navigate("/orders");
  }, [history, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userName, password);
    if (!userName && !password)
      return setError("Please Enter your Username and Password");
    if (!userName) return setError("Please Enter your Username");
    if (!password) return setError("Please Enter your Password");

    setError("");

    setLoading(true);
    loginUser(userName, password, () => navigate("/orders"));
  };

  const onUserChange = (e) => {
    const value = e.target.value;

    setUserName(value);
  };

  const onPasswordChange = (e) => {
    const value = e.target.value;

    setPassword(value);
  };

  return (
    <div className={classes.login__container}>
      <div className={classes.login__form}>
        <img
          src={logo}
          alt="logo"
          width={150}
          style={{ marginBottom: "25px" }}
        />
        <form className={classes.login__form__group} onSubmit={handleSubmit}>
          <AppInput
            type={"text"}
            placeholder={"Enter your email address"}
            onChange={onUserChange}
          />
          <AppInput
            type={"password"}
            placeholder={"Enter your password"}
            onChange={onPasswordChange}
          />
          <a
            style={{
              margin: 0,
              padding: 0,
              marginTop: "-13px",
              fontSize: "14px",
              fontWeight: 500,
              alignSelf: "end",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </a>
          {error && <AppError error={error} />}
          <AppButton type={"submit"} title={"Login"} onClick={handleSubmit} />
        </form>
      </div>
      <div className={classes.login__image}>
        <img className={classes.login__imageImg} src={delievery} alt="logo" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginPage);
