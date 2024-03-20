"use client";
import React, { useEffect, useState } from "react";
import { CreateBoard } from "./components/CreateBoard";
import { boardService, tasksService } from "./api";
import { BoardModel, TasksModel } from "./models/models";
import { Board } from "./components/Board";
import Skeleton from "./skeleton";



export default function Home() {

  const [board, setBoard] = useState<BoardModel[] | null>()
  const [loading, setLoading] = useState<boolean>(false)

  async function boards(): Promise<BoardModel[] | null | any> {
    const res: BoardModel[] | null = await boardService.board();
    setBoard(res)
  }

  const onClick = () => {
    setLoading(true)
    const btn: HTMLElement | null = document.getElementById("btn")
    btn!.style.visibility = "hidden"
    boards()
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }

  async function deleteTasks(): Promise<TasksModel[] | null> {
    return await tasksService.deleteTasks()
  }

  const handleDelete = (taskId: string) => {
    tasksService.iTaskId = taskId
    setLoading(true)
    deleteTasks()
    setTimeout(() => {
      setLoading(false)
    }, 1000);

  }

  const verifyClick = () => {
    if (loading === true) {
      boards()
      return
    }
  }

  useEffect(verifyClick, [board])



  return (
    <main className="flex w-full h-screen flex-col  items-center justify-center bg-primary max-md:">
      <div className="w-full h-1/5 flex max-md:flex-col max-md:items-center">
        <h2 className="w-1/2 h-full flex items-center justify-center text-center text-3xl mt-3 text-secondary max-md:text-sm max-md:w-full">PERSONAL TASK MANAGEMENT <br /> 🟢🔵🔴</h2>
        <CreateBoard handleClick={onClick} />
      </div>
      <button onClick={onClick} className="w-[10%] h-[40px] mr-9 flex justify-center items-center bg-secondary text-primary  text-xs cursor-pointer rounded max-md:w-2/5 max-md:mr-2 max-md:mt-3" id="btn">Open dashboard</button>
      {loading ?
        <div id="container" className="flex w-full h-screen flex-wrap gap-8 items-center justify-center m-9 overflow-auto">
          <Skeleton />
        </div>
        :
        <div className="flex w-full h-screen flex-wrap gap-8 items-center justify-center m-9 overflow-auto max-md:p-3">
          {board?.map((e: any) => (
            <Board id={e.id} title={e.title} createdAt={e.createdAt} tasks={e.tasks} handleClick={onClick} handleDelete={handleDelete} />
          ))}

        </div>
      }
    </main>
  );
}
