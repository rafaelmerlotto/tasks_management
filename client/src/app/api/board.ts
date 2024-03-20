import { BoardModel } from "../models/models";



export class BoardService {

    iBoardId: string | undefined;

    constructor(private readonly url: string) { }


    async board(): Promise<BoardModel[] | null> {
        const res = await fetch(`${this.url}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
            }
        })
        if(res.ok){
            const data = await res.json();   
        return data.board
        } 
       return null
    }

    async createBoard( title: string): Promise<BoardModel[] | null>{
        const res = await fetch(`${this.url}/create`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({title: title})
        })
        if(res.ok){
            return await res.json();   
        } 
       return null
    }

    async updateBoard(title: string, id: string): Promise<BoardModel[] | null>{
        const res = await fetch(`${this.url}/update/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({title: title})
        })
        if(res.ok){
            return await res.json();   
        } 
       return null
    }
}