import React, { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { boardService } from '../api'
import { BoardModel } from '../models/models'
import Loading from '../loading'

export const UpdateBoard: FC<BoardModel> = ({ title, id }) => {


    const [loading, setLoading] = useState<boolean>(false)
    const { register, handleSubmit } = useForm<{ title: string }>()
    const onSubmit = async (data: { title: string }) => {
        setLoading(true)
        await boardService.updateBoard(data.title, id)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    const onClick = (id: string) => {
        boardService.iBoardId = id
        console.log(id)
    }


    return (
        <>
            {loading ? <Loading /> :
                <form className='w-full h-0.5/5 ' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" onClick={(e) => onClick(e.currentTarget.value)} defaultValue={title} className='h-full  w-[95%] text-primary bg-secondary text-center mt-4 font-bold' {...register("title", { required: true })} />

                    <button type='submit' className=' h-full font-bold text-green-600'>✓</button>
                </form>
            }
        </>

    )
}
