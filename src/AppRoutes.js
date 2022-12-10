/** @format */

import React from "react";
import { useRoutes } from "react-router-dom";
import Header from "./components/header/Index";

export const AppRoutes = () => {
  let elements = useRoutes([
    {path:'/',element:<Header/>}
  ]);
};
