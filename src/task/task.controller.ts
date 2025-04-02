import { Controller, Delete, Get, Patch, Post, Put, Body, Query, Param, NotFoundException , UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskService } from "./task.service";
import { NotFoundError } from "rxjs";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

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
    @Get('/:taskId') //
    // @Get(':taskId') //es lo mismo que la de arriba, pero con el decorador de la ruta
    getTask(@Param('taskId') taskId: string){
       const taskFound =  this.tasksService.getTask(parseInt(taskId)); //el + convierte el string a number
       if(!taskFound){
        return new NotFoundException(`Task with id ${taskId} not found`);
       }
       return taskFound;
    }


    @Post()
    
    createTask(@Body() task: CreateTaskDto){
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto){
        return this.tasksService.updateTask(task);
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