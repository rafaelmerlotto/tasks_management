import React, { FC, useEffect, useState } from 'react'
import { BoardModel, TasksModel } from '../models/models'
import { boardService, tasksService } from '../api'
import { UpdateBoard } from './UpdateBoard'
import { useForm } from 'react-hook-form'



export const Board: FC<BoardModel> = ({ id, title, createdAt, tasks, handleClick, handleDelete }) => {

    const [task, setTask] = useState<TasksModel[] | null>()
    const [modal, setModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)
    const { register, handleSubmit } = useForm<{ text: string, difficult: string, start: string, finish: string, boardId: string }>()

    const onSubmit = async (data: { text: string, difficult: string, start: string, finish: string, boardId: string }) => {
        setLoading(true)
        await tasksService.createTasks(data.text, data.difficult, data.start, data.finish)
        handleClick()
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }

    const onGetId = () => {
        tasksService.iBoardId = id
        console.log(id)
    }

    const toggleModal = () => {
        setModal(!modal);
        boardService.iBoardId = id
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    async function getTasks(): Promise<TasksModel[] | null | any> {
        const res: TasksModel[] | null = await tasksService.tasks();
        return setTask(res)
    }

    useEffect(() => {
        getTasks()
    }, [])


    return (
        <>
            <div className='w-[30%] h-3/4 bg-secondary rounded max-md:w-full' >
                {
                    modal ?
                        <UpdateBoard title={title} id={id} createdAt={new Date()} tasks={[]} handleClick={handleClick} handleDelete={() => { }} />
                        :
                        <div className='w-full h-0.5/5 flex' key={id}>
                            <p onClick={toggleModal} className='h-full w-[95%] text-primary text-center mt-4 font-bold cursor-pointer'>{title}</p>
                        </div>
                }
                <div className='h-3/5 overflow-auto max-md:w-full'>
                    <ul className=' w-full '>
                        {tasks.map((t: any) => (
                            <div className=' w-full flex justify-between '>
                                <div className='w-2/3 '>
                                    <li key={t.id} className=' max-w-2/3 text-primary text-start mt-4 text-sm ml-2 '>{t.text}</li>
                                </div>
                                <div className='w-1/3 flex items-center justify-center gap-3 mr-2'>
                                    <li key={t.id} className='w-0.5/3 text-primary text-start mt-4 text-sm list-none max-md:text-xs'>{t.difficult}</li>
                                    <li key={t.id} className=' w-1/3 text-primary text-start mt-4 text-sm list-none max-md:text-xs'>{t.start}</li>
                                    <li key={t.id} className=' w-1/3 text-primary text-start mt-4 text-sm  list-none max-md:text-xs'>{t.finish}</li>
                                </div>
                                <div className='w-[30px] '>
                                    <button key={t.id} value={t.id} onClick={(e) => handleDelete(e.currentTarget.value)} className=' text-primary text-start mt-4 text-sm mr-2 '>🗑️</button>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='w-full h- flex justify-center items-center gap-2 p-2'>
                    <div className='w-2/3 '>
                        <div className=' w-full h-full'>
                            <input type="text" onClick={onGetId}  {...register("text", { required: true })} className=' w-full  h-[30px] text-primary bg-secondary border-primary border rounded max-md:text-xs' />
                            <input type="text" hidden defaultValue={id} {...register("boardId", { required: true })} className=' w-2/3 h-[30px] text-primary bg-secondary border-primary border rounded' />
                        </div>
                        <div className='w-full flex justify-center items-center gap-5 max-md:mt-2'>
                            <select {...register("difficult", { required: true })} className='bg-secondary w-[45px] text-sm max-md:text-xs max-md:w-[40px]' >
                                <option value=""> </option>
                                <option value="🟢">🟢 Easy</option>
                                <option value="🔵">🔵 Medium</option>
                                <option value="🔴">🔴 Hard</option>
                            </select>
                            <select {...register("start", { required: true })} className='bg-secondary w-[60px] text-sm max-md:text-xs' >
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
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                                <option value="23:00">23:00</option>
                                <option value="24:00">24:00</option>
                            </select>
                            <select {...register("finish", { required: true })} className='bg-secondary  w-[60px]  text-sm max-md:text-xs' >
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
                                <option value="19:00">19:00</option>
                                <option value="20:00">20:00</option>
                                <option value="21:00">21:00</option>
                                <option value="22:00">22:00</option>
                                <option value="23:00">23:00</option>
                                <option value="24:00">24:00</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-1/3 h-[49px]'>
                        <button type='submit' className='w-full h-[30px] flex justify-center items-center bg-primary text-secondary text-xs cursor-pointer rounded max-md:text-xs'>ADD +</button>
                    </div>
                </form>
            </div>
        </>
    )
}
