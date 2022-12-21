/** @format */
import InputMask from "react-input-mask";
import React from "react";

const Phone = ({ number, onChange }) => {
  return (
    <InputMask
      placeholder='+7 (707) 777 77 77'
      mask='+7 (999)-999-99-99'
      value={number}
      onChange={onChange}
      className='py-3 px-3 w-96 rounded-sm'
    ></InputMask>
  );
};

export default Phone;
