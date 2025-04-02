import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-user.dto';

@Controller()
export class UsersController {

    constructor(private usersService: UsersService){}

    @Get('/users')
    getUsers(){
        return this.usersService.getUsers();
    }

    @Post('/users')
    
    createUsers(@Body() user: CreateUsersDto){
        return this.usersService.createUsers(user);
    }
}
