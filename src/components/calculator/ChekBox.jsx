/** @format */

import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {removePrice, setPrice} from "../../store/slice/calculator/calculator";
import './calculator.css'

const ChekBox = ({name, value, id}) => {
    const dispatch = useDispatch();
    const [cheked, setCheked] = useState(false);
    const calculate = () => {
        setCheked(!cheked);
        cheked ? dispatch(removePrice(value)) : dispatch(setPrice(value));
    };

    return (
        <div>
            <li className='w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600'>
                <div className='flex items-center pl-3'>
                    <input
                        id={id}
                        checked={cheked}
                        onChange={calculate}
                        type='checkbox'
                        value=''
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
                    />
                    <label
                        htmlFor={id}
                        className='py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                        {name}
                    </label>
                </div>
            </li>
        </div>
    );
};

export default ChekBox;
