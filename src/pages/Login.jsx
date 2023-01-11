/** @format */

import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import {fetchAuth, isAuthSelector} from "../store/slice/auth/auth";

const Login = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(isAuthSelector);
    console.log(isAuth);
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
        const user = await dispatch(fetchAuth(data));

        if (!user.payload) {
            alert("не удалось авторизоваться");
        } else
            window.localStorage.setItem("token", user.payload.user.accessToken);
        navigate('/admin')

    };

    return (
        <div>
            <div className=' w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 md:h-full'>
                <div className='relative m-auto w-full h-full max-w-md md:h-auto'>
                    <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
                        <div className='px-6 py-6 lg:px-8'>
                            <h3 className='mb-4 text-xl font-medium text-gray-900 dark:text-white'>
                                Войти в Админ панель
                            </h3>
                            <div className='space-y-6'>
                                <div>
                                    <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                                        Почта
                                    </label>
                                    <input
                                        onChange={update}
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
                                        onChange={update}
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
                                    <Link
                                        to='/'
                                        className='text-sm text-blue-700 hover:underline dark:text-blue-500'
                                    >
                                        Забыли пароль
                                    </Link>
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
