"use client";
import React, { Suspense, useEffect, useState } from "react";
import CreateBoard from "./components/CreateBoard";
import { boardService } from "./api";
import { BoardModel } from "./models/models";
import { Board } from "./components/Board";
import Loading from "./loading";



export default function Home() {


  const [board, setBoard] = useState<BoardModel[] | null>([])
  const [loading, setLoading] = useState<boolean>(false)

  async function boards(): Promise<BoardModel[] | null | any> {
    const res: BoardModel[] | null = await boardService.board();
    return setBoard(res)
  }

  useEffect(() => {
    boards()
  }, [board])





  return (
    <main className="flex w-full h-screen flex-col  items-center justify-center bg-primary max-md:">
      <div className="w-full h-1/5 flex max-md:flex-col max-md:items-center">
        <h2 className="w-1/2 h-full flex items-center justify-center text-center text-3xl mt-3 text-secondary max-md:text-sm max-md:w-full">PERSONAL TASK MANAGEMENT <br /> 🟢🔵🔴</h2>
         <CreateBoard />
      </div>
     
      {loading ?
        <div className="flex w-full h-screen flex-wrap gap-8 items-center justify-center m-9 overflow-auto">
          <Loading />
        </div>
        :
        <div className="flex w-full h-screen flex-wrap gap-8 items-center justify-center m-9 overflow-auto max-md:p-3">
          {board?.map((e: any) => (
            <Board id={e.id} title={e.title} createdAt={e.createdAt} tasks={e.tasks}/>
          ))}
        </div>
      }

    </main>
  );
}
