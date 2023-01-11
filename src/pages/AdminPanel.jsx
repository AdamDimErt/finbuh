/** @format */

import React, {useEffect, useRef, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {isAuthSelector} from "../store/slice/auth/auth";
import jwtDecode from "jwt-decode";

import {Navigate} from "react-router-dom";

import 'moment/locale/ru'
import {db} from "../firebase-config";
import {deleteDoc, doc} from 'firebase/firestore'
import {fetchClient} from "../store/slice/user/user";
import InputMask from "react-input-mask";

const AdminPanel = () => {
    const ClientRef = useRef('input')
    console.log(ClientRef)
    const isAuth = useSelector(isAuthSelector);
    const [isDisabled, setIsDisabled] = useState(true);

    const disableClick = () => {
        setIsDisabled(!isDisabled)
    };

    const deleteClient = async (id) => {
        const docRef = doc(db, "users", id);
        deleteDoc(docRef)
        dispatch(fetchClient())
    }

    // user jwt token
    const token = window.localStorage.getItem("token");
    const user = jwtDecode(token);
    const [users, setUsers] = useState([])
    const clients = useSelector(
        (state) => state.user.clients
    );
    console.log(clients)

    const dispatch = useDispatch()


    // const test = () => {
    //     dispatch((fetchClient()))
    // }
    // навигация на главную страницу
    useEffect(() => {
        dispatch(fetchClient())
        console.log(clients)
    }, [])
    if (!window.localStorage.getItem("token") && !isAuth) {
        return <Navigate to='/login'/>;
    }

    return (
        <div>
            <button onClick={() => test()}>click</button>
            <h2 className='text-4xl  text-center pt-10'>Admin Panel</h2>
            <h3 className='text-2xl'>Добро пажаловать {user.name}</h3>{" "}
            <div className='w-full'>
                <div className=' flex justify-center w-full mx-auto'>
                    <div className='flex flex-col w-full'>
                        <div className='w-full'>
                            <div className='border-b border-gray-200 shadow'>
                                <table className='divide-y divide-gray-300 w-full'>
                                    <thead className='bg-gray-50'>
                                    <tr>
                                        <th className='px-6 py-2 text-xs text-gray-500'>ID</th>
                                        <th className='px-6 py-2 text-xs text-gray-500'>Имя</th>
                                        <th className='px-6 py-2 text-xs text-gray-500'>Телефон</th>
                                        <th className='px-6 py-2 text-xs text-gray-500'>Дата</th>
                                        <th className='px-6 py-2 text-xs text-gray-500'>Изменить</th>
                                        <th className='px-6 py-2 text-xs text-gray-500'>Удалить</th>
                                    </tr>
                                    </thead>
                                    <tbody className='bg-white divide-y divide-gray-300'>
                                    {clients.map((client) => {
                                        return (
                                            <tr key={client.id} className='whitespace-nowrap'>
                                                <td className='px-6 py-4 text-sm text-center text-gray-500'>

                                                </td>
                                                <td className='px-6 py-4'>
                                                    <div className='text-sm text-gray-900 text-center'>
                                                        {client.name}
                                                    </div>
                                                </td>
                                                <td className='px-6 py-4'>
                                                    <InputMask
                                                        placeholder='+7 (707) 777 77 77'
                                                        mask='+7 (999)-999-99-99'
                                                        ref={ClientRef}
                                                        className='text-sm text-gray-500 text-center'
                                                        placeholder={client.telephone}
                                                        disabled={isDisabled}

                                                    ></InputMask>
                                                </td>
                                                <td className='px-6 py-4 text-sm text-gray-500 text-center'>
                                                    <p>{client.time}</p>
                                                </td>
                                                <td className='px-6 py-4 text-center'>
                                                    <a

                                                        className='px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full text-center cursor-pointer'
                                                        onClick={() => disableClick()}
                                                    >
                                                        Изменить
                                                    </a>
                                                </td>
                                                <td className='px-6 py-4 text-center'>
                                                    <a
                                                        href='#'
                                                        className='px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full'
                                                        onClick={() => deleteClient(client.id)}
                                                    >
                                                        Удалить
                                                    </a>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;
