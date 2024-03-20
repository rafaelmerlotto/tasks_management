import {  TasksModel } from "../models/models";

export class TasksService {

    iBoardId: string | undefined;
    iTaskId: string | undefined;

    constructor(private readonly url: string) { }

    async tasks(): Promise<TasksModel[] | null> {
        const res = await fetch(`${this.url}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
            }
        })
        if(res.ok){
            const data = await res.json();   
        return data.task
        } 
       return null
    }


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
    
    async deleteTasks(): Promise<TasksModel[] | null>{
        const res = await fetch(`${this.url}/delete/${this.iTaskId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
            },
        })
        if(res.ok){
            return await res.json();   
        } 
       return null
    }
}