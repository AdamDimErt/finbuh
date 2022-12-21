/** @format */

import React, { useState } from "react";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import { useDispatch } from "react-redux";

import { setUser, removeUser } from "../store/slice/user/user";

const Login = () => {
  const auth = getAuth();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(password);
  console.log(email);

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      dispatch(
        setUser({
          email: user.user.email,
          id: user.user.uid,
          accessToken: user.user.accessToken,
        }),
      );
      localStorage.setItem("jwt-auth", user.user.accessToken);
      let token = localStorage.getItem("jwt-auth");
      console.log(token);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    dispatch(removeUser());
  };
  return (
    <div>
      <input
        type='email'
        placeholder='Email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type='password'
        placeholder='password'
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>click</button>
      <button onClick={login}>log out</button>
    </div>
  );
};

export default Login;
