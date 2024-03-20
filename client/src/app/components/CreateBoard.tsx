import React, { FC, useState } from 'react'
import { boardService } from '../api';
import { useForm } from 'react-hook-form';

interface Data {
    handleClick: () => void
}

export const CreateBoard: FC<Data> = ({ handleClick }) => {

    const { register, handleSubmit } = useForm<{ title: string }>()
    const [loading, setLoading] = useState<boolean>(false)
    const onSubmit = async (data: { title: string }) => {
        setLoading(true)
        await boardService.createBoard(data.title) 
        setTimeout(() => {
            setLoading(false)  
        }, 1000);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-1/2 h-full flex justify-end items-center pr-9 gap-4  max-md:w-full max-md:mt-6 max-md:p-0'>
            <input placeholder='Board title' {...register("title", { required: true })} type="text" className='w-2/4 h-[30px] text-primary bg-secondary border-primary max-md:ml-2 rounded max-md:w-3/5 max-md:text-xs' />
            {
                loading ?
                    <button type='submit' className='w-[20%] h-[30px] mr-9 flex justify-center items-center bg-secondary text-primary  text-xs cursor-pointer rounded max-md:w-2/5 max-md:mr-2'>Loading...</button>
                    :
                    <button type='submit' onClick={handleClick} className='w-[20%] h-[30px] mr-9 flex justify-center items-center bg-secondary text-primary  text-xs cursor-pointer rounded max-md:w-2/5 max-md:mr-2'>Create</button>
            }
        </form>
    )
}
