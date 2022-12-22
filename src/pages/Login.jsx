/** @format */

import React, { useState } from "react";

import { getAuth, signOut, signInWithEmailAndPassword } from "firebase/auth";

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

  // const logOut = async () => {
  //   dispatch(removeUser());
  //   await signOut(auth);
  //   localStorage.removeItem("jwt-auth");
  // };
  return (
    <div>
      <div class='fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full'>
        <div class='relative w-full h-full max-w-md md:h-auto'>
          <div class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div class='px-6 py-6 lg:px-8'>
              <h3 class='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                Sign in to our platform
              </h3>
              <form class='space-y-6' action='#'>
                <div>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Почта
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    name='email'
                    id='email'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <label
                    for='password'
                    class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Пароль
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    required
                  />
                </div>
                <div class='flex justify-between'>
                  <div class='flex items-start'>
                    <div class='flex items-center h-5'>
                      <input
                        id='remember'
                        type='checkbox'
                        value=''
                        class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                        required
                      />
                    </div>
                    <label
                      for='remember'
                      class='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                      onClick=''
                    >
                      Запомнить меня
                    </label>
                  </div>
                  <a
                    href='#'
                    class='text-sm text-blue-700 hover:underline dark:text-blue-500'
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type='submit'
                  class='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Login to your account
                </button>
                <div class='text-sm font-medium text-gray-500 dark:text-gray-300'>
                  Not registered?{" "}
                  <a href='#' class='text-blue-700 hover:underline dark:text-blue-500'>
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
