import React, { FC, useEffect, useState } from 'react'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { tasksService } from '../api'
import { TasksModel } from '../models/models'


export const CreateTasks: FC<TasksModel> = ({ boardId }) => {


    const { register, handleSubmit } = useForm<{ text: string, difficult: string, start: string, finish: string, boardId: string }>()

    const onSubmit = async (data: { text: string, difficult: string, start: string, finish: string, boardId: string }) => {
        await tasksService.createTasks(data.text, data.difficult, data.start, data.finish)
    }

    const onClick = () => {
        tasksService.iBoardId = boardId
    }

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)} className='w-full h-1/5 flex justify-center items-center gap-2 p-2'>
                <div className='w-2/3'>
                    <div className=' w-full'>
                        <input type="text" onClick={onClick}  {...register("text", {required: true})} className=' w-full  h-[30px] text-primary bg-secondary border-primary border rounded max-md:text-xs' />
                        <input type="text" hidden defaultValue={boardId} {...register("boardId", {required: true})} className=' w-2/3 h-[30px] text-primary bg-secondary border-primary border rounded' />
                    </div>
                    <div className='w-full flex justify-center items-center gap-5 max-md:mt-2'>
                        <select {...register("difficult", {required: true})} className='bg-secondary w-[45px] text-sm max-md:text-xs max-md:w-[40px]' >
                            <option value=""> </option>
                            <option value="🟢">🟢 Easy</option>
                            <option value="🔵">🔵 Medium</option>
                            <option value="🔴">🔴 Hard</option>
                        </select>
                        <select {...register("start", {required: true})} className='bg-secondary w-[60px] text-sm max-md:text-xs' >
                            <option value="">Start</option>
                            <option value="01:00">01:00</option>
                            <option value="02:00">02:00</option>
                            <option value="03:00">03:00</option>
                            <option value="04:00">04:00</option>
                            <option value="05:00">05:00</option>
                            <option value="06:00">06:00</option>
                            <option value="07:00">07:00</option>
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                            <option value="23:00">23:00</option>
                            <option value="24:00">24:00</option>
                        </select>

                        <select {...register("finish", {required: true})} className='bg-secondary  w-[60px]  text-sm max-md:text-xs' >
                            <option value="">Finish</option>
                            <option value="01:00">01:00</option>
                            <option value="02:00">02:00</option>
                            <option value="03:00">03:00</option>
                            <option value="04:00">04:00</option>
                            <option value="05:00">05:00</option>
                            <option value="06:00">06:00</option>
                            <option value="07:00">07:00</option>
                            <option value="08:00">08:00</option>
                            <option value="09:00">09:00</option>
                            <option value="10:00">10:00</option>
                            <option value="11:00">11:00</option>
                            <option value="12:00">12:00</option>
                            <option value="13:00">13:00</option>
                            <option value="14:00">14:00</option>
                            <option value="15:00">15:00</option>
                            <option value="16:00">16:00</option>
                            <option value="17:00">17:00</option>
                            <option value="18:00">18:00</option>
                            <option value="20:00">20:00</option>
                            <option value="21:00">21:00</option>
                            <option value="22:00">22:00</option>
                            <option value="23:00">23:00</option>
                            <option value="24:00">24:00</option>
                        </select>
                    </div>

                </div>
                <div className='w-1/3 h-[49px]'>
                    <Button />
                </div>

                
            </form>


        </>

    )
}
