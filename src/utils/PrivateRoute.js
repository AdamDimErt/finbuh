/** @format */

import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = (auth) => {
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to='/login' />;
};
