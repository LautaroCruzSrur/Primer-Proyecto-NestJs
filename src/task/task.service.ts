import { Injectable } from '@nestjs/common';

export interface User{
    name: string;
    age: number;
}

@Injectable()
export class TaskService{

    getTasks(): User{
        return{
            name: 'Luis',
            age: 25
        } ;
    }

    createTask(){
        return 'Creando Tareas';
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