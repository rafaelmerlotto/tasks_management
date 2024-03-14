
export interface BoardModel {
    id: string
    title: string
    createdAt: Date
    tasks: [],
}


export const dataBoard: BoardModel[] = [
    {
        id: "65f188909766a793622ada26",
        title: "Tasks for today",
        createdAt: new Date(),
        tasks: []
    }
]

export interface TasksModel {
    id: string
    text: string
    createdAt: Date
    boardId: string
    difficult: string
    start: string
    finish: string
}


export const dataTasks: TasksModel[] = [
    {
        id: "65f18bcd860830d6668fefbd",
        text: "learn english",
        createdAt: new Date(),
        boardId: "65f188909766a793622ada26",
        difficult: "easy",
        start: "12:00",
        finish: "13:00"
    }
]