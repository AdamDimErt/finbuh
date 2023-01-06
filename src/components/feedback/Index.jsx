/** @format */

import React, {useState} from "react";
import Modal from "../modal/Index";
import {Controller, useForm} from "react-hook-form";
import InputMask from "react-input-mask";
import {addDoc, collection} from "firebase/firestore";
import {db} from "../../firebase-config";

const Index = () => {

    const {register, handleSubmit, control, reset, formState: {errors}} = useForm();
    const [isOpen, setOpen] = useState(false)

    const onSubmit = async (data) => {
        const usersCollection = collection(db, "users");
        await addDoc(usersCollection, {
            name: data.name,
            telephone: data.telephone,
        });
        console.log(data)
        console.log('отправлена')
        reset()
    }

    const validTel = (value) => value.slice(-1) !== '_'
    return (
        <>
            <Modal open={isOpen}/>
            <div className='flex mt-7  flex-col items-center'>
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
                        className='py-3 px-3 mb-2  max-w-4xl rounded-sm'
                        type='text'
                    />
                    {errors.name && <p className='w-50 text-red-600 text-sm'>{errors.name.message}</p>}

                    <label className="w-40 mt-4">Номер телефона</label>
                    <Controller
                        defaultValue=''
                        render={({field}) => (
                            <InputMask {...register("telephone",
                                {
                                    required: true,
                                    validate: validTel
                                }
                            )} className='py-3 px-3 w-[56rem] rounded-sm'
                                       placeholder='+7 (707) 777 77 77'
                                       mask='+7 (999)-999-99-99'/>
                        )}
                        control={control}
                        placeholder='+7 (707) 777 77 77'
                        mask='+7 (999)-999-99-99'
                        name="telephone"
                        className='py-3 px-3 w-[56rem] rounded-sm'

                    />
                    {errors.telephone && <p className='w-50 text-red-600 text-sm'>Введите номер телефона</p>}
                    <button
                        className='w-[35rem] mb-10 mt-6 py-3 px-3 rounded-xl text-white bg-blue-800 m-auto'
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
