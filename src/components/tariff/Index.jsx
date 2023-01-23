/** @format */

import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

import TariffPlan from "./TariffPlan";

const Index = ({tariffRef}) => {
    return (
        <div ref={tariffRef} className='bg-white p-10'>
            <h1 className='text-center text-3xl'>Наши тарифы услуг</h1>
            <div className='tariff pt-20 flex justify-center'>
                <div className=''>
                    <h3 className='text-center text-xl font-bold mb-5'>Услуги</h3>
                    <ul className='flex flex-col items-center justify-between min-w-[320px] h-[500px] p-4'>
                        <li>
                            <p
                                id='docs'
                                data-tooltip-content='Документы И Справочники'
                                data-tooltip-place='top'
                                className='relative'
                            >
                                Кол-Во Операций В Пакете{" "}
                                <FontAwesomeIcon
                                    className=' absolute top-0 text-[10px]'
                                    icon={faQuestion}
                                />
                            </p>

                            <Tooltip anchorId='docs'/>
                        </li>
                        <li>
                            <p>Работники / Физлица (Тд / Гпх)</p>
                        </li>
                        <li>
                            <p>Бухгалтерский Учёт</p>
                        </li>
                        <li>
                            <p>Налоговый Учёт</p>
                        </li>
                        <li>
                            <p>Проверка Кнп И Лицевых Счетов</p>
                        </li>
                        <li>
                            <p>Интернет-Банкинг</p>
                        </li>
                        <li>
                            <p>Статистическая Отчетность</p>
                        </li>
                        <li>
                            <p>Коммуникации И Консультации*</p>
                        </li>
                        <li>
                            <p>Представительство В Налоговых Органах</p>
                        </li>
                        <li>
                            <p>Управленческая Отчетность</p>
                        </li>
                        <li>
                            <p>Торговая Компания</p>
                        </li>
                        <li>
                            <p
                                data-tooltip-content='Внешнеэкономическая Деятельность'
                                data-tooltip-place='top'
                                id='VED'
                                className='relative'
                            >
                                Вэд / Еаэс
                                <FontAwesomeIcon
                                    className=' absolute top-0 text-[10px]'
                                    icon={faQuestion}
                                />
                                <Tooltip anchorId='VED'/>
                            </p>

                        </li>
                        <li>
                            <p>1С В Облаке (1 Пользователь)</p>
                        </li>
                        <li>
                            <p
                                id='Do'
                                data-tooltip-content='Электронный Документооборот'
                                data-tooltip-place='top'
                                className='relative'
                            >
                                Эдо
                                <FontAwesomeIcon
                                    className=' absolute top-0 text-[10px]'
                                    icon={faQuestion}
                                />
                                <Tooltip anchorId='Do'/>
                            </p>
                        </li>
                        <li>
                            <p>Стоимость:</p>
                        </li>
                    </ul>
                </div>
                <div className="over overflow-x-scroll flex">
                    <TariffPlan value='start'/>
                    <TariffPlan value='standard'/>
                    <TariffPlan value='prof'/>
                    <TariffPlan value='business'/>
                </div>

            </div>
        </div>

    );
};

export default Index;
