"use client"
import React, { useEffect } from 'react'
import { boardService } from './api'

export default function Loading() {

  useEffect(() => {
    
  },[boardService.board()])

  
  return (
    <main>Loading...</main>
  )
}
