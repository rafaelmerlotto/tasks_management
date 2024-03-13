import React from 'react'
import Button from './Button'

export default function Board() {
    return (
        <div className='w-1/4 h-2/3 bg-secondary rounded'>
            <div className='w-full h-[20px]'>
                <p className='text-primary text-center mt-4 font-bold'>Board title</p>
            </div>
            <div className='h-3/4'>
                <ul className='list-decimal'>
                    <li className='text-primary text-start mt-4 text-sm ml-2 '>Learning english</li>
                    <li className='text-primary text-start mt-4 text-sm ml-2'>Learning english</li>
                </ul>
            </div>
            <div className='w-full h-[30px] flex justify-center items-center gap-4'>
                <input type="text" className=' w-2/3 h-[30px] text-primary bg-secondary border-primary border rounded'/>
                <Button/>
            </div>
        </div>
    )
}
