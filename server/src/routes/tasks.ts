import { configDotenv } from "dotenv";
import express, { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma";
import { Board, Tasks } from "@prisma/client";


configDotenv();
const tasks: Router = express.Router();


tasks.get("/", async (req: Request, res: Response) => {
    const task: Tasks[] | null = await prisma.tasks.findMany()
    if (!task) {
        return res.status(404).send({ msg: "Cannot found tasks", valid: false });
    }
    if (task.length === 0) {
        return res.status(403).send({ msg: "There are no tasks", valid: false });
    }
    res.status(200).send({ task: task, valid: true });
})

tasks.post("/create/:boardId", async (req: Request, res: Response) => {
    const { text, difficult, start, finish } = req.body;
    const { boardId } = req.params

    const board: Board | null = await prisma.board.findUnique({
        where: {
            id: boardId
        }
    })
    const task: Tasks | null = await prisma.tasks.create({
        data: {
            text: text,
            createdAt: new Date(),
            boardId: board!.id,
            difficult: difficult,
            start: start,
            finish: finish
        },
        
    })
    if (!task) {
        return res.status(400).send({ msg: "The task cannot be created", valid: false });
    }
    res.status(201).send({ task: task, valid: true });
})

tasks.put("/update/:id", async (req: Request, res: Response) => {
    const { text, difficult, } = req.body;
    const { id} = req.params

    const task: Tasks | null = await prisma.tasks.update({
        where:{
            id: id
        }, 
        data:{
            text: text,
            difficult: difficult
        }
    })
    if (!task) {
        return res.status(400).send({ msg: "The task cannot be modified", valid: false });
    }
    res.status(201).send({ task: task, valid: true });
})


tasks.delete("/delete/:id", async (req: Request, res: Response) => {
    const { id} = req.params

    const task: Tasks | null = await prisma.tasks.delete({
        where:{
            id: id
        }
    })
    if (!task) {
        return res.status(400).send({ msg: "The task cannot be deleted", valid: false });
    }
    res.status(201).send({ task: task, valid: true });
})

export { tasks }