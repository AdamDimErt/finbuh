/** @format */

import React, { useState } from "react";

import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useDispatch } from "react-redux";

import { auth } from "../firebase-config";

import { setUser } from "../store/slice/user/user";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  // creation of fields for authorization
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(password);
  console.log(email);

  // fun login
  const login = async () => {
    try {
      // request to firebase
      const user = await signInWithEmailAndPassword(auth, email, password);

      dispatch(
        setUser({
          email: user.user.email,
          id: user.user.uid,
          accessToken: user.user.accessToken,
        }),
      );
      console.log(user);
      // save in localstorage
      localStorage.setItem("jwt-auth", user.user.accessToken);
      <Navigate to='/admin' replace />;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=' w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full'>
        <div className='relative m-auto w-full h-full max-w-md md:h-auto'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
            <div className='px-6 py-6 lg:px-8'>
              <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                Sign in to our platform
              </h3>
              <div className='space-y-6'>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Почта
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='name@company.com'
                  />
                </div>
                <div>
                  <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Пароль
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    name='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  />
                </div>
                <div className='flex justify-between'>
                  <div className='flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        id='remember'
                        type='checkbox'
                        value=''
                        className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800'
                      />
                    </div>
                    <label className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                      Запомнить меня
                    </label>
                  </div>
                  <a
                    href='#'
                    className='text-sm text-blue-700 hover:underline dark:text-blue-500'
                  >
                    Забыли пароль
                  </a>
                </div>
                <button
                  onClick={login}
                  className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                >
                  Войти в аккаунт
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
