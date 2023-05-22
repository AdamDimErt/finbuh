/** @format */

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { fetchAuth, isAuthSelector } from "../store/slice/auth/auth";

const Login = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(isAuthSelector);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  // creation of fields for authorization
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // set data in auth
  const update = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // fun login
  const login = async () => {
    try {
      const user = await dispatch(fetchAuth(data));
      console.log(user);
      if (!user.payload) {
        alert("не удалось авторизоваться");
      } else {
        window.localStorage.setItem("user", user.payload.user.accessToken);
        navigate("/admin");
      }
    } catch (e) {
      setError(true);
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/admin");
    }
  }, [isAuth, navigate]);
  return (
    <div>
      <div className='h-full md:max-h-md w-full p-4 overflow-y-auto md:inset-0 md:h-full'>
        <div className='relative mx-auto md:max-w-none w-full h-full md:h-auto'>
          <div className='relative bg-white rounded-lg overflow-hidden shadow dark:bg-gray-700'>
            <div className='px-6 py-6 lg:px-8'>
              <h3 className='mb-4 text-lg font-medium text-gray-900 dark:text-white'>
                Войти в Админ панель
              </h3>
              <div className='space-y-6'>
                <div>
                  <label className=' mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Почта
                  </label>
                  <input
                    onChange={update}
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                    placeholder='name@company.com'
                  />
                </div>
                <div>
                  <label className=' mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Пароль
                  </label>
                  <input
                    onChange={update}
                    type='password'
                    name='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                  />
                </div>
                <div className='flex justify-between'>
                  <div className='flex items-start'>
                    <p className={"text-red-500 text-[12px]"}>
                      {error && "ошибка неправильный логин или пароль"}
                    </p>
                  </div>
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
