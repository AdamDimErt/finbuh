/** @format */

import React, { useState } from "react";
import InputMask from "react-input-mask";
import Phone from "./Phone";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const Index = () => {
  const [telephone, setTelephone] = useState("");
  const [name, setName] = useState("");

  const createClient = async () => {
    await setDoc(doc(db, "users", "doc"), {
      name: name,
      telephone: telephone,
    });
    console.log(setDoc);
  };

  return (
    <div className='flex mt-7  flex-col items-center'>
      <h3 className='mt-4 mb-6 text-2xl'>Оставте вашу заявку</h3>

      <input
        placeholder='Фио'
        className='py-3 px-3 mb-2 w-[56rem] rounded-sm'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Phone number={telephone} onChange={(e) => setTelephone(e.target.value)} />
      <button
        className='w-[35rem] mb-10 mt-6 py-3 px-3 rounded-xl text-white bg-blue-800'
        type='submit'
        onClick={createClient}
      >
        Отправить заявку
      </button>
    </div>
  );
};

export default Index;
