import React, { FC } from 'react'
import { useForm } from 'react-hook-form'
import { boardService } from '../api'
import { BoardModel } from '../models/models'

export const UpdateBoard: FC<BoardModel> = ({ title}) => {

    const { register, handleSubmit } = useForm<{ title: string }>()
    const onSubmit = async (data: { title: string }) => {
        await boardService.updateBoard(data.title)
    }



    return (
        <form  className='w-full h-0.5/5 '  onSubmit={handleSubmit(onSubmit)}>        
                <input type="text" defaultValue={title} className='h-full  w-[95%] text-primary bg-secondary text-center mt-4 font-bold' {...register("title", {required: true})} />
                <button type='submit'  className=' h-full font-bold text-green-600'>✓</button>
        </form>
    )
}
