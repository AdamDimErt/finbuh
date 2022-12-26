/** @format */

import { Navigate, Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { isAuthSelector } from "../store/slice/auth/auth";

export const PrivateRoute = (auth) => {
  const isAuth = useSelector(isAuthSelector);
  console.log(isAuth);
  return isAuth ? <Navigate to='/admin' /> : <Navigate to='/login' />;
};
