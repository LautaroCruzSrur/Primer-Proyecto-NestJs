import { Controller, Delete, Get, Patch, Post, Put } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('/tasks')
export class TaskController{

    tasksService: TaskService;

    constructor(tasksService:TaskService){
        this.tasksService = tasksService;
    }

    @Get()
    getAllTask(){
       return this.tasksService.getTasks();
    }

    @Post()
    createTask(){
        return this.tasksService.createTask();
    }

    @Put()
    updateTask(){
        return this.tasksService.updateTask();
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }

    @Patch() //actualiza una porcion de la tarea
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus();
    }
}