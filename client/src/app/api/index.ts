import { BoardService } from "./board";
import { TasksService } from "./tasks";


const url: string = "http://localhost:4000";
export const boardService: BoardService = new BoardService(`${url}/board`)
export const tasksService: TasksService = new TasksService(`${url}/tasks`)