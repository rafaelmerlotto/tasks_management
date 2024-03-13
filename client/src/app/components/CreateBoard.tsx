import React from 'react'
import Button from './Button'

export default function CreateBoard() {
    return (
        <div className='w-full h-1/5 flex justify-end items-center pr-9 gap-4'>
            <input placeholder='Board title' type="text" className='w-1/4 h-[30px] text-primary bg-secondary border-primary  rounded' />
            <button className='w-[10%] h-[30px] mr-9 flex justify-center items-center bg-secondary text-primary  text-xs cursor-pointer rounded'>Create</button>
        </div>
    )
}
