import React from 'react';
import './style.css'

const Index = () => {
    return (
        <div className='work h-[70vh] m-auto flex-col  flex justify-around'>
            <h2 className='text-3xl font-bold text-center'>Как мы работаем</h2>
            <div className="flex justify-around">
                <div
                    className="bord ">
                    <p className={'w-7 h-7 absolute top-1 left-1 rounded-[50%] flex border-[rgb(30 64 175 / 44%)] ' +
                        'border-2 items-center justify-center text-[12px] align-center'}>1</p>
                    <h4 className={'text-xl font-bold'}>Оставляете заявку</h4>
                    <p>Мы вам перезваниваем</p>
                </div>
                <div className="bord  ">
                    <p className={'w-7 h-7 absolute top-1 left-1 rounded-[50%] flex border-[rgb(30 64 175 / 44%)] ' +
                        'border-2 items-center justify-center text-[12px] align-center'}>2</p>
                    <h4>Консультация</h4>
                    <p>Обговариваем действие </p>
                </div>
                <div className=" bord ">
                    <p className={'w-7 h-7 absolute top-1 left-1 rounded-[50%] flex border-[rgb(30 64 175 / 44%)] ' +
                        'border-2 items-center justify-center text-[12px] align-center'}>3</p>
                    <h4>Подписание договора</h4>
                </div>
                <div className=" bord  ">
                    <p className={'w-7 h-7 absolute top-1 left-1 rounded-[50%] flex border-[rgb(30 64 175 / 44%)] ' +
                        'border-2 items-center justify-center text-[12px] align-center'}>4</p>
                    <h4>Начало работы</h4>
                </div>
            </div>
        </div>
    );
};

export default Index;