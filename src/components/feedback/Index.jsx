/** @format */

import React, { useState } from "react";
import Phone from "./Phone";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import Modal from "../modal/Index";

const Index = () => {
  // set users
  const [telephone, setTelephone] = useState("");
  const [name, setName] = useState("");
const [isOpen,setOpen] = useState(false)

  // add users
  const usersCollection = collection(db, "users");
  const createClient = async () => {
    // await addDoc(usersCollection, {
    //   name: name,
    //   telephone: telephone,
    // });
      setName("");
      setTelephone("");
      setOpen(true)




  };

   return (
    <>
        <Modal open={isOpen}/>
        <div className='flex mt-7  flex-col items-center'>
     <h3 className='mt-4 mb-6 text-2xl'>Оставте вашу заявку</h3>

        <input
         placeholder='Фио'
            className='py-3 px-3 mb-2 w-[56rem] rounded-sm'
         type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
        min='6'
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
</>

  );
};

export default Index;
