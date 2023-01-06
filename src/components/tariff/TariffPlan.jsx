/** @format */

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faCheck, faXmark} from "@fortawesome/free-solid-svg-icons";

const TariffPlan = ({value}) => {

    return (
        <div className='start ml-8 '>
            <h3 className='text-center text-xl font-bold mb-5'>{value}</h3>
            <ul className=" flex flex-col items-center justify-between h-[500px] border-r-2 border-l-2 p-4">
                <li>
                    {value === "start"
                        ? 30
                        : value === "standard"
                            ? 50
                            : value === "prof"
                                ? 150
                                : value === "business"
                                    ? 250
                                    : null}
                </li>
                <li>
                    {" "}
                    {value === "start"
                        ? 1
                        : value === "standard"
                            ? 3
                            : value === "prof"
                                ? 7
                                : value === "business"
                                    ? 10
                                    : null}
                </li>
                <li>
                    <FontAwesomeIcon className=' text-green-500' icon={faCheck}/>
                </li>
                <li>
                    <FontAwesomeIcon className=' text-green-500' icon={faCheck}/>
                </li>
                <li>2 раза/мес</li>
                <li>1 расчетный счет</li>
                <li>
                    {value === "start"
                        ? 1
                        : value === "standard"
                            ? 1
                            : value === "prof"
                                ? 2
                                : value === "business"
                                    ? 3
                                    : null}
                </li>
                <li>до 2 часов</li>
                <li>
                    {value === "start" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "standard" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "prof" ? (
                        "до 1 часа"
                    ) : value === "business" ? (
                        "до 1 часа"
                    ) : null}
                </li>
                <li>
                    {" "}
                    {value === "start" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "standard" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "prof" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "business" ? (
                        1
                    ) : null}
                </li>
                <li>
                    {value === "start" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "standard" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "prof" ? (
                        <FontAwesomeIcon className=' text-green-500' icon={faCheck}/>
                    ) : value === "business" ? (
                        <FontAwesomeIcon className=' text-green-500' icon={faCheck}/>
                    ) : null}
                </li>
                <li>
                    {value === "start" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "standard" ? (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    ) : value === "prof" ? (
                        "до 1 операции"
                    ) : value === "business" ? (
                        "до 1 операции"
                    ) : null}
                </li>

                <li> 1</li>
                <li>
                    {value === "start" || value === "Standard" ? (
                        <FontAwesomeIcon className=' text-green-500' icon={faCheck}/>
                    ) : (
                        <FontAwesomeIcon className=' text-red-500' icon={faXmark}/>
                    )}
                </li>
                <li>
                    {value === "start" ? (
                        <h3 className='font-bold'> 60 000,00 ₸
                        </h3>

                    ) : value === "standard" ? (
                        <h3 className='font-bold'>95 000,00 ₸</h3>

                    ) : value === "prof" ? (
                        <h3 className='font-bold'>180 000,00 ₸</h3>

                    ) : value === "business" ? (
                        <h3 className='font-bold'>275 000,00 ₸</h3>

                    ) : null}
                </li>
            </ul>
        </div>
    );
};

export default TariffPlan;
