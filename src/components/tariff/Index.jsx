/** @format */

import React from "react";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Tooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

import TariffPlan from "./TariffPlan";
import './style.css'

const Index = ({tariffRef}) => {
    return (
        <div id="sec1" ref={tariffRef} className='uslugContainer bg-white p-10'>
            <h1 className='text-center text-3xl'>Наши тарифы услуг</h1>
            <div className='tariff pt-20 flex justify-center'>
                <div className=''>

                </div>
                <div className="over overflow-x-scroll flex">
                    <div>
                        <h3 className='text-center text-xl font-bold mb-5'>Услуги</h3>
                        <ul className='flex flex-col items-center uslug justify-between min-w-[320px] h-[500px] p-4'>
                            <li>
                                <p
                                    id='docs'
                                    data-tooltip-content='Документы И Справочники'
                                    data-tooltip-place='top'
                                    className='relative'
                                >
                                    Колличество операций в пакете{" "}
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
                                <p>Бухгалтерский учёт</p>
                            </li>
                            <li>
                                <p>Налоговый учёт</p>
                            </li>
                            <li>
                                <p>Проверка КНП и лицевых счетов</p>
                            </li>
                            <li>
                                <p>Интернет-банкинг</p>
                            </li>
                            <li>
                                <p>Статистическая отчетность</p>
                            </li>
                            <li>
                                <p>Коммуникации и консультации</p>
                            </li>
                            <li>
                                <p>Представительство в налоговых органах</p>
                            </li>
                            <li>
                                <p>Управленческая отчетность</p>
                            </li>
                            <li>
                                <p>Торговая компания</p>
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
                    <TariffPlan value='start' quantity="30" employees="1" communication="1" dealership={true}
                                tradeCompany={true} EDT={true} price="60 000"/>
                    <TariffPlan value='standard' quantity="50" employees="3" communication="1" dealership={true}
                                tradeCompany={true} price="95 000 "/>
                    <TariffPlan value='prof' quantity="150" employees="7" communication="2" FTA={true} price="180 000"/>
                    <TariffPlan value='business' quantity="250" employees="10" communication="3" reporting={true}
                                FTA={true} price="275 000"/>
                </div>

            </div>
        </div>

    );
};

export default Index;
