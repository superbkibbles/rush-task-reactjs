import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";

import LoginPage from "./Pages/login/LoginPage";
import { getToken, getUser } from "./auth/storage";
import AppLoading from "./components/appLoading/AppLoading";
import NotFoundPage from "./Pages/NotFoundPage";
import { Layout } from "./container";

const App = ({ user }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    getUser();
    restoreToken();
  }, [getUser]);

  const restoreToken = () => {
    getToken();
    setIsReady(true);
  };

  if (!isReady) return <AppLoading />;

  console.log(user);
  return (
    <Routes>
      <Route exact path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Layout />} />
      {/* <Route exact path="/*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { getUser })(App);
