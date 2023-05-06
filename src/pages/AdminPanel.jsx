import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {isAuthSelector} from "../store/slice/auth/auth";
import {useNavigate} from "react-router-dom";
import {collection, deleteDoc, doc, onSnapshot, updateDoc} from "firebase/firestore";
import 'moment/locale/ru'
import {db} from "../firebase-config";
import InputMask from "react-input-mask";
import moment from "moment";

const AdminPanel = () => {

    const ClientRef = useRef('input')
    const isAuth = useSelector(isAuthSelector);
    const [isDisabled, setIsDisabled] = useState(true);
    const [data, setData] = useState([])

    const disableClick = () => setIsDisabled(!isDisabled);

    const deleteClient = async (id) => {
        const docRef = doc(db, "users", id);
        await deleteDoc(docRef)

    }
    const updateClient = async (id, e) => {
        const docRef = doc(db, "users", id);
        const newFileds = {telephone: e.target.value}
        console.log(newFileds)
        await updateDoc(docRef, newFileds)
    }
    useEffect(() => {
        const unsub = onSnapshot(collection(db, "users"), (doc) => {
            const users = [];
            doc.docs.forEach((doc) => {
                users.push(
                    {
                        id: doc.id,
                        name: doc.name,
                        telephone: doc.telephone,
                        time: moment.unix(doc._document.createTime.timestamp.seconds).locale('ru').format("llll"),
                        ...doc.data()
                    }
                );
                setData(users)
            });
        });
        return () => {
            unsub()
        }
    }, [])
    const navigate = useNavigate()
    if (!window.localStorage.getItem("token") && !isAuth) {
        return navigate('/login');
    }

    return (
        <div>
            <h2 className='text-4xl  text-center pt-10'>Admin Panel</h2>
            <h3 className='text-2xl'>Добро пажаловать</h3>{" "}
            <div className='w-full'>
                <div className=' flex justify-center w-full mx-auto'>
                    <div className='flex flex-col w-full'>
                        <div className='w-full'>
                            <div className='border-b overflow-x-auto border-gray-200 shadow'>
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
                                    {data.map((client) => {
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
                                                        mask='+7 (999)-999-99-99'
                                                        ref={ClientRef}
                                                        className='text-sm text-gray-500 text-center'
                                                        placeholder={client.telephone}
                                                        disabled={isDisabled}
                                                        onBlur={(e) => updateClient(client.id, e)}

                                                    ></InputMask>
                                                </td>
                                                <td className='px-6 py-4 text-sm text-gray-500 text-center'>
                                                    <p>{client.time}</p>
                                                </td>
                                                <td className='px-6 py-4 text-center'>
                                                    <button

                                                        className='px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full text-center cursor-pointer'
                                                        onClick={() => disableClick()}
                                                    >
                                                        Изменить
                                                    </button>
                                                </td>
                                                <td className='px-6 py-4 text-center'>
                                                    <p

                                                        className='px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full cursor-pointer'
                                                        onClick={() => deleteClient(client.id)}
                                                    >
                                                        Удалить
                                                    </p>
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
