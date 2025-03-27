import { Injectable } from '@nestjs/common';

export interface User{
    name: string;
    age: number;
}

@Injectable()
export class TaskService{

    private tasks : any = [];

    getTasks(): User{
        return this.tasks;
    }

    createTask(task : any){
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }
    updateTask(){
        return 'Acutalizando Tareas';
    }
    deleteTask(){
        return 'Eliminando Tareas';
    }
    updateTaskStatus(){
        return 'Actualizando el estado de la tarea';
    }
}