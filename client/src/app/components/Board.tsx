import React, { FC, useEffect, useState } from 'react'
import Button from './Button'
import { BoardModel } from '../models/models'
import { boardService } from '../api'
import { CreateTasks } from './CreateTasks'
import { UpdateBoard } from './UpdateBoard'
import Loadable from 'next/dist/shared/lib/loadable.shared-runtime'
import Loading from '../loading'




export const Board: FC<BoardModel> = ({ id, title, createdAt, tasks }) => {


    const [modal, setModal] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false)

    const toggleModal = () => {
        setModal(!modal);
        boardService.iBoardId = id
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    async function updateBoard(): Promise<BoardModel[] | null> {
        const res: BoardModel[] | null = await boardService.updateBoard(title)
        return res
    }

   

    return (

        <>

            <div className='w-[30%] h-3/4 bg-secondary rounded max-md:w-full' >
                {
                    modal ?
                        <UpdateBoard title={title} id={''} createdAt={new Date()} tasks={[]} />
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


                            </div>


                        ))}
                    </ul>
                </div>
                <CreateTasks id={''} text={''} createdAt={new Date()} boardId={id} difficult={''} start={''} finish={''} />
            </div>


        </>
    )
}
