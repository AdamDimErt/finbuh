/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCheck, faXmark, faQuestion } from "@fortawesome/free-solid-svg-icons";

const TariffPlan = ({ value }) => {
  value == "start" ? console.log("da") : console.log("net");
  return (
    <div className='start'>
      <h3>{value}</h3>
      <ul>
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
          <FontAwesomeIcon icon={faCheck} />
        </li>
        <li>
          <FontAwesomeIcon icon={faCheck} />
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
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "standard" ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "prof" ? (
            "до 1 часа"
          ) : value === "business" ? (
            "до 1 часа"
          ) : null}
        </li>
        <li>
          {" "}
          {value === "start" ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "standard" ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "prof" ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "business" ? (
            1
          ) : null}
        </li>
        <li>
          {value === "start" ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "standard" ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "prof" ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : value === "business" ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : null}
        </li>
        <li>
          {value === "start" ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "standard" ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : value === "prof" ? (
            "до 1 операции"
          ) : value === "business" ? (
            "до 1 операции"
          ) : null}
        </li>

        <li> 1</li>
        <li>
          {value === "start" || value === "Standard" ? (
            <FontAwesomeIcon className=' text-green-500' icon={faCheck} />
          ) : (
            <FontAwesomeIcon className=' text-red-500' icon={faXmark} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default TariffPlan;
