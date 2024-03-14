import { Board } from "@prisma/client";
import { configDotenv } from "dotenv";
import express, { Request, Response, Router } from "express";
import { prisma } from "../utils/prisma";


configDotenv();
const board: Router = express.Router();


board.get("/", async (req: Request, res: Response) => {
    const board: Board[] | null = await prisma.board.findMany({
        include: {
            tasks: true
        }
    })
    if (!board) {
        return res.status(404).send({ msg: "Cannot found boards", valid: false });
    }
    if (board.length === 0) {
        return res.status(403).send({ msg: "There are no boards", valid: false });
    }
    res.status(200).send({ board: board, valid: true });
})


board.post("/create", async (req:Request, res: Response) => {
    const {title} = req.body;
    const board: Board | null  = await prisma.board.create({
        data:{
            title: title,
            createdAt: new Date()
        }
    })
    if(!board){
        return res.status(400).send({ msg: "The board cannot be created", valid: false });
    }
    res.status(201).send({ board: board, valid: true });
})


board.put("/update/:id", async (req: Request, res: Response) => {
    const { title } = req.body;
    const { id} = req.params

    const board: Board | null = await prisma.board.update({
        where:{
            id: id
        }, 
        data:{
            title: title,
        }
    })
    if (!board) {
        return res.status(400).send({ msg: "The board cannot be modified", valid: false });
    }
    res.status(201).send({ task: board, valid: true });
})



export {board}