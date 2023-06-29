/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const TariffPlan = ({
  value,
  quantity,
  employees,
  communication,
  dealership,
  reporting,
  tradeCompany,
  FTA,
  EDT,
  price,
}) => {
  const icons = {
    check: (
      <FontAwesomeIcon
        className=' text-green-500'
        icon={faCheck}
      />
    ),
    cross: (
      <FontAwesomeIcon
        className=' text-red-500'
        icon={faXmark}
      />
    ),
  };

  return (
    <div className='start ml-8 '>
      <h3 className='text-center text-xl font-bold mb-5'>
        {value}
      </h3>
      <ul className=' flex flex-col items-center justify-between h-[500px] border-r-2 border-l-2 p-4'>
        <li>{quantity}</li>
        <li>{employees}</li>
        <li>{icons.check}</li>
        <li>{icons.check}</li>
        <li>Два раза в месяц</li>
        <li>Один расчетный счет</li>
        <li>{communication}</li>
        <li>до 2 часов</li>
        <li>{dealership ? icons.cross : "до 1 часа"}</li>
        <li>{reporting ? 1 : icons.cross}</li>
        <li>{tradeCompany ? icons.cross : icons.check}</li>
        <li>{FTA ? "до 1 операции" : icons.cross}</li>
        <li>{EDT ? icons.cross : icons.check}</li>
        <li>{price} ₸</li>
      </ul>
    </div>
  );
};

export default TariffPlan;
