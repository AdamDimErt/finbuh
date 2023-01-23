/** @format */

import React, {Fragment, useState} from "react";
import {Controller, useForm} from "react-hook-form";
import InputMask from "react-input-mask";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebase-config";
import {Dialog, Transition} from "@headlessui/react";

import './index.css'

const Index = ({feedbackRef}) => {

    let [isOpen, setIsOpen] = useState(false);


    function closeModal() {
        setIsOpen(!isOpen);
    }

    function openModal() {
        setIsOpen(true)
    }


    const {register, handleSubmit, control, reset, formState: {errors}} = useForm();

    const onSubmit = async (data) => {
        const usersCollection = collection(db, "users");
        await addDoc(usersCollection, {
            name: data.name,
            telephone: data.telephone,
        });
        openModal()
        reset()
    }

    const validTel = (value) => value.slice(-1) !== '_'
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>

                <Dialog as='div' className='relative z-10' onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25'/>
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto '>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel
                                    className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                    <Dialog.Title
                                        as='h3'
                                        className='text-lg font-medium leading-6 text-gray-900'
                                    >
                                        Заявка отправлена
                                    </Dialog.Title>
                                    <div className='mt-2'>
                                        <p className='text-sm text-gray-500'>
                                            Заявка будет расмотренна в скором времени мы вам позвоним. Ожидайте
                                            наше звонка)
                                        </p>
                                    </div>

                                    <div className='mt-4'>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                                            onClick={closeModal}
                                        >
                                            Спасибо за заявку
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <div ref={feedbackRef} className='flex mt-7 buh  flex-col items-center bg-[#E3E2DF]'>
                <h3 className='mt-4 mb-6 text-2xl'>Оставте вашу заявку</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="form flex flex-col justify-center">
                    <label htmlFor="name">Имя</label>
                    <input
                        {...register("name", {
                            required: 'Заполните имя',
                            minLength: {
                                value: 2,
                                message: 'Минимум 2 буквы'
                            },
                            maxLength: {
                                value: 50,
                                message: 'С0лишком большое имя'
                            }
                        })}
                        placeholder='Фио'
                        className='py-3 bg-[#94c4fe] placeholder-white text-white px-3 mb-2  max-w-[896px] rounded-sm'
                        type='text'
                    />
                    {errors.name && <p className='w-50 text-[#ff1f00] font-bold text-sm'>{errors.name.message}</p>}

                    <label className="w-40 mt-4">Номер телефона</label>
                    <Controller
                        defaultValue=''
                        render={({field}) => (
                            <InputMask {...register("telephone",
                                {
                                    required: true,
                                    validate: validTel
                                }
                            )} className='py-3 px-3 text-white bg-[#94c4fe] placeholder-white  max-w-[896px] rounded-sm'
                                       placeholder='+7 (707) 777 77 77'
                                       mask='+7 (999)-999-99-99'/>

                        )}
                        control={control}
                        placeholder='+7 (707) 777 77 77'
                        mask='+7 (999)-999-99-99'
                        name="telephone"
                        className='py-3  px-3 w-[56rem] rounded-sm'

                    />
                    {errors.telephone &&
                        <p className='w-50 text-[#ff1f00] font-bold text-sm'>Введите номер телефона</p>}
                    <button
                        className='w-[35rem] bg-[#173a9a] mb-10 mt-6 py-3 px-3 rounded-xl text-white bg-[#7e85bc] m-auto'
                        type='submit'
                    >
                        Отправить заявку
                    </button>
                </form>


            </div>
        </>

    );
};

export default Index;
