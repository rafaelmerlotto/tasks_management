import {  TasksModel } from "../models/models";

export class TasksService {

    iBoardId: string | undefined;

    constructor(private readonly url: string) { }

  

    async createTasks( text: string, difficult: string, start: string, finish: string): Promise<TasksModel[] | null>{
        const res = await fetch(`${this.url}/create/${this.iBoardId}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({text: text, difficult: difficult, start: start, finish: finish})
        })
        if(res.ok){
            return await res.json();   
        } 
       return null
    }
}