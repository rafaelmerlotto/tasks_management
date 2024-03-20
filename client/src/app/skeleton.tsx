import React, { useEffect, useState } from 'react'
import { BoardModel } from './models/models';
import { boardService } from './api';


export default function Skeleton() {

    const [board, setBoard] = useState<BoardModel[] | null>()

    useEffect(() => {
        async function boards(): Promise<BoardModel[] | null | any> {
            const res: BoardModel[] | null = await boardService.board();
            setBoard(res)
        }
        boards()
    })


    return (

        <>
            <div className="bg-secondary w-[30%] h-3/4  rounded max-md:w-full shadow  p-4  ">
                <div className="animate-pulse flex space-x-4 h-full">
                    <div className="flex-1 space-y-6 py-1 h-full">
                        <div className="space-y-3 h-full flex flex-col items-center justify-center">
                            <div className="h-[30px] w-2/3 bg-primary rounded"></div>
                            <div className='w-full h-[80%] flex gap-2 justify-between'>
                                <div className="h-full w-2/3 bg-primary rounded"></div>
                                <div className="h-full w-1/3 bg-primary rounded"></div>
                            </div>
                            <div className="h-[50px] w-full bg-primary rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary w-[30%] h-3/4  rounded max-md:w-full shadow  p-4 max-md:invisible">
                <div className="animate-pulse flex space-x-4 h-full">
                    <div className="flex-1 space-y-6 py-1 h-full">
                        <div className="space-y-3 h-full flex flex-col items-center justify-center">
                            <div className="h-[30px] w-2/3 bg-primary rounded"></div>
                            <div className='w-full h-[80%] flex gap-2 justify-between'>
                                <div className="h-full w-2/3 bg-primary rounded"></div>
                                <div className="h-full w-1/3 bg-primary rounded"></div>
                            </div>
                            <div className="h-[50px] w-full bg-primary rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary w-[30%] h-3/4  rounded max-md:w-full shadow  p-4 max-md:invisible">
                <div className="animate-pulse flex space-x-4 h-full">
                    <div className="flex-1 space-y-6 py-1 h-full">
                        <div className="space-y-3 h-full flex flex-col items-center justify-center">
                            <div className="h-[30px] w-2/3 bg-primary rounded"></div>
                            <div className='w-full h-[80%] flex gap-2 justify-between'>
                                <div className="h-full w-2/3 bg-primary rounded"></div>
                                <div className="h-full w-1/3 bg-primary rounded"></div>
                            </div>
                            <div className="h-[50px] w-full bg-primary rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

