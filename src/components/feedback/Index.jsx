/** @format */

import React, { useState } from "react";
import InputMask from "react-input-mask";
import Phone from "./Phone";
// import InputMask from "react-text-mask";

const Index = () => {
  const [telephone, setTelephone] = useState("");
  const [name, setName] = useState("");

  return (
    <div className='flex mt-7  flex-col items-center'>
      <h3 className=' text-2xl'>Оставте вашу заявку</h3>

      <input placeholder='Фио' className='py-3 px-3 mb-2 w-96 rounded-sm' type='text' />
      <Phone number={telephone} onChange={(e) => setTelephone(e.target.value)} />
      <button
        className='w-96 mt-6 py-3 px-3 rounded-xl text-white bg-blue-800'
        type='submit'
      >
        Отправить заявку
      </button>
    </div>
  );
};

export default Index;
