/** @format */

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {removePrice, setPrice} from "../../store/slice/calculator/calculator";

import ChekBox from "./ChekBox";
import "./calculator.css";

const Index = ({calcRef}) => {
    const [active, setActive] = useState(true);
    const [tax, setTax] = useState(true);
    const price = useSelector((state) => state.calc.price);
    const [docs, setDocs] = useState(0);
    const [employee, setEmployee] = useState(0);
    const dispatch = useDispatch();

    const upgradeDocs = (e) => {
        setDocs(+e.target.value);
    };
    const upgradeEmpl = (e) => {
        setEmployee(+e.target.value);
    };

    useEffect(() => {
        setDocs(docs);
    }, [docs]);

    useEffect(() => {
        setEmployee(employee);
    }, [employee]);

    const toogleForm = () => {
        setActive(!active);
    };
    const toogleTax = () => {
        setTax(!tax);
        tax ? dispatch(setPrice(25000)) : dispatch(removePrice(25000));
    };

    return (

        <div className={'backcalc'}>
            <h1 className='mt-8 text-3xl  font-bold text-center mb-10 '>Калькулятор цен</h1>
            <div ref={calcRef}
                 className=' bg-white justify-center flex-wrap calculator justify-between max-w-[1000px] m-[auto] p-5 border-4 rounded-lg flex'>


                <div className='section width300 flex flex-col items-center'>

                    <div className='w-[300px] flex flex-col mb-[50px]'>
                        <h4 className='mb-[6px] widthText'>Организационно-правовая форма:</h4>
                        <div className='flex'>
                            <button
                                onClick={toogleForm}
                                className={
                                    `lg:w-[144px] w-[100px] flex items-center justify-center h-4 p-4 border bg-gray-100 border-gray-300 rounded-l-lg` +
                                    (active ? " active" : "")
                                }
                            >
                                ТОО
                            </button>
                            <button
                                className={
                                    "lg:w-[144px] w-[100px]   flex items-center justify-center h-4 p-4 border bg-gray-100 border-gray-300 rounded-r-lg" +
                                    (active ? "" : " active")
                                }
                                onClick={toogleForm}
                            >
                                ИП
                            </button>
                        </div>
                    </div>
                    <div className=''>
                        <p className=' text-2xl  w-80 mb-6 width300'>Укажите количество документов в месяц:</p>
                        <input
                            onChange={upgradeDocs}
                            className=' w-full inputPrice h-10 text-lg text-center border bg-gray-100 border-gray-300 rounded-lg '
                            type='number'
                            min='0'
                        />
                    </div>
                    <div className='width300'>
                        <p className='text-2xl width300 w-80 mb-6'>Количество Сотрудников:</p>
                        <input
                            min='0'
                            onChange={upgradeEmpl}
                            className=' w-full inputPrice h-10 text-lg text-center border bg-gray-100 border-gray-300 rounded-lg '
                            type='number'
                        />
                    </div>
                </div>
                <div className='section w-[300px]  flex flex-col'>
                    <h4 className='mb-[6px]'>Режим налогообложения:</h4>
                    <div className='  flex'>
                        <button
                            onClick={toogleTax}
                            className={
                                "text-xs w-[144px] flex items-center justify-center h-4 p-4 border bg-gray-100 border-gray-300 rounded-l-lg" +
                                (tax ? " active" : "")
                            }
                        >
                            Упрощённый
                        </button>
                        <button
                            onClick={toogleTax}
                            className={
                                "text-xs w-[144px] flex items-center justify-center h-4 p-4 border bg-gray-100 border-gray-300 rounded-r-lg" +
                                (tax ? "" : " active")
                            }
                        >
                            Общеустановленный
                        </button>
                    </div>
                    <div className=' flex flex-col justify-center items-center'>
                        <h3 className='mb-4 font-semibold text-gray-900 dark:text-white'>
                            Вид деятельности:
                        </h3>
                        <ul className='w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
                            <ChekBox id={"NDS"} name={"Наличие НДС"} value={20000}/>
                            <ChekBox id={"production"} name={"Производство"} value={20000}/>
                            <ChekBox id={"Catering"} name={"Общественное питание"} value={20000}/>
                            <ChekBox id={"import_export"} name={"Импорт-экспорт"} value={15000}/>
                            <ChekBox id={"dealing "} name={"Торговля"} value={15000}/>
                            <ChekBox id={"money "} name={"Валютные операции"} value={10000}/>
                            <ChekBox id={"branch "} name={"Наличие филиалов"} value={10000}/>
                        </ul>
                    </div>
                </div>
                <div className='section w-[300px] flex items-center text-center flex-col text-2xl m-auto'>
                    <p className='mb-20'>Ваш оптимальный тариф почти готов</p>
                    <h2 className=' text-4xl mb-4'>СТОИМОСТЬ:</h2>
                    <div className='w-[300px] price'>

                        <h1 className='price text-6xl border border-[#173A9A] rounded-2xl p-5'>
                            {price + docs * 1000 + employee * 1000} <span className=' text-2xl'>₸</span>
                        </h1>
                    </div>
                    <button
                        className='border buttonPrice mt-7 p-2 border-[#173A9A] bg-[#173A9A] rounded-xl text-[#fff]'>
                        <a href="tel:+77074408018">Получить предоложение</a>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Index;
