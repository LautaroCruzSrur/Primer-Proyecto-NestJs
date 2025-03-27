import { Controller, Delete, Get, Patch, Post, Put, Body, Query } from "@nestjs/common";
import { TaskService } from "./task.service";

@Controller('/tasks')
export class TaskController{

    tasksService: TaskService;

    constructor(tasksService:TaskService){
        this.tasksService = tasksService;
    }

    @Get()
    getAllTask(@Query() query:any){
        console.log(query);
       return this.tasksService.getTasks();
    }

    @Post()
    createTask(@Body() task:any){
        return this.tasksService.createTask(task);
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