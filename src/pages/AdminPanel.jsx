/** @format */

import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { isAuthSelector } from "../store/slice/auth/auth";
import jwtDecode from "jwt-decode";

import { Navigate } from "react-router-dom";
import { fetchClient } from "../store/slice/user/user";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const AdminPanel = () => {
  const [clients, setClients] = useState([]);
  const colRef = collection(db, "users");
  const isAuth = useSelector(isAuthSelector);

  useEffect(() => {
    const getClients = async () => {
      const data = await getDocs(colRef);

      setClients(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          time:Date(+doc._document.createTime.timestamp.seconds),
        })),
      );
    };
    getClients();
  }, []);

  console.log(clients);

  // user jwt token
  const token = window.localStorage.getItem("token");
  const user = jwtDecode(token);
  // навигация на главную страницу
  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to='/login' />;
  }
  return (
    <div>
      <button>click</button>
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
                        <tr className='whitespace-nowrap'>
                          <td className='px-6 py-4 text-sm text-center text-gray-500'>
                            1
                          </td>
                          <td className='px-6 py-4'>
                            <div className='text-sm text-gray-900 text-center'>
                              {client.name}
                            </div>
                          </td>
                          <td className='px-6 py-4'>
                            <input className='text-sm text-gray-500 text-center'></input>
                          </td>
                          <td className='px-6 py-4 text-sm text-gray-500 text-center'>
                            <p>{client.time}</p>
                          </td>
                          <td className='px-6 py-4 text-center'>
                            <a
                              href='#'
                              className='px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full'
                            >
                              Изменить
                            </a>
                          </td>
                          <td className='px-6 py-4 text-center'>
                            <a
                              href='#'
                              className='px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full'
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
