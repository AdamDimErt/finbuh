/** @format */

import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { isAuthSelector } from "../store/slice/auth/auth";
import jwtDecode from "jwt-decode";

import { Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const AdminPanel = () => {
  // навигация на главную страницу
  const isAuth = useSelector(isAuthSelector);
  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to='/login' />;
  }
  // user jwt token
  const token = window.localStorage.getItem("token");
  const user = jwtDecode(token);

  return (
    <div>
      <h2 className='text-4xl  text-center pt-10'>Admin Panel</h2>
      <h3 className='text-2xl'>Добро пажаловать {user.name}</h3>{" "}
      <div className='w-full'>
        <div class=' flex justify-center w-full mx-auto'>
          <div class='flex flex-col w-full'>
            <div class='w-full'>
              <div class='border-b border-gray-200 shadow'>
                <table class='divide-y divide-gray-300 w-full'>
                  <thead class='bg-gray-50'>
                    <tr>
                      <th class='px-6 py-2 text-xs text-gray-500'>ID</th>
                      <th class='px-6 py-2 text-xs text-gray-500'>Имя</th>
                      <th class='px-6 py-2 text-xs text-gray-500'>Телефон</th>
                      <th class='px-6 py-2 text-xs text-gray-500'>Дата</th>
                      <th class='px-6 py-2 text-xs text-gray-500'>Изменить</th>
                      <th class='px-6 py-2 text-xs text-gray-500'>Удалить</th>
                    </tr>
                  </thead>
                  <tbody class='bg-white divide-y divide-gray-300'>
                    <tr class='whitespace-nowrap'>
                      <td class='px-6 py-4 text-sm text-center text-gray-500'>1</td>
                      <td class='px-6 py-4'>
                        <div class='text-sm text-gray-900 text-center'>Jon doe</div>
                      </td>
                      <td class='px-6 py-4'>
                        <input value='' class='text-sm text-gray-500 text-center'></input>
                      </td>
                      <td class='px-6 py-4 text-sm text-gray-500 text-center'>
                        <input type='date' />
                      </td>
                      <td class='px-6 py-4 text-center'>
                        <a
                          href='#'
                          class='px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full'
                        >
                          Изменить
                        </a>
                      </td>
                      <td class='px-6 py-4 text-center'>
                        <a
                          href='#'
                          class='px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full'
                        >
                          Удалить
                        </a>
                      </td>
                    </tr>
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
