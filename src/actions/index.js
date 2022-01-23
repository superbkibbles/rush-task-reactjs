import userApi from "../api/user";
import { storeToken, storeUser } from "../auth/storage";

import { LOGIN_USER } from "./types";

export const loginUser = (email, password, callback) => async (dispatch) => {
  //   const { data } = userApi.login(userCredential.email, userCredential.password);
  //   if (!ok)
  //   storeToken(data.token);
  //   storeUser(JSON.stringify(data.user));
  //   dispatch({
  //     type: LOGIN_USER,
  //     payload: data,
  //   });
  //   callback();
  console.log(email, password);
  const { data, ok } = await userApi.login(email, password);
  if (!ok) return;
  storeToken(data.data.token);
  storeUser(data.data.user);
  dispatch({
    type: LOGIN_USER,
    payload: data.data,
  });
  callback();
};
