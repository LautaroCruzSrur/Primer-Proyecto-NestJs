import { Injectable } from '@nestjs/common';

export interface User{
    name: string;
    age: number;
}

@Injectable()
export class TaskService{

    private tasks : any = [];

    getTasks(){
        return this.tasks;
    }
    getTask(id: number){
        return this.tasks.find(task => task.id === id);
    }

    createTask(task : CreateTaskDto){
        console.log(task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task;
    }
    updateTask(task: UpdateTaskDto){
        console.log(task);
        return 'Acutalizando Tareas';
    }
    deleteTask(){
        return 'Eliminando Tareas';
    }
    updateTaskStatus(){
        return 'Actualizando el estado de la tarea';
    }
}