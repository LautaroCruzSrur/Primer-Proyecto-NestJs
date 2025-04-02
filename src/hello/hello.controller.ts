import { Controller, Get, Res, Req, HttpCode, Param, ParseIntPipe, ParseBoolPipe, Query, UseGuards } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { ValidateuserPipe } from './pipres/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller()
export class HelloController {

    @Get('/')
    index(@Req() request: Request , @Res() response: Response){

        console.log(request.url);
        response.status(200).json('Hello World');
    }

    @Get('new')
    @HttpCode(201)
    somethingNew(){
        return 'Somethin new'
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return '404 not fount'
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'error Route!!'
    }

    @Get('ticket/:num')
    @UseGuards(AuthGuard)
    getNumber(@Param('num', ParseIntPipe) num: number){
        return num + 14;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean){ //convetir params(strings) a otros datos
        console.log(typeof status)
        return status;
    }
    
    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: {name: string , age : number}){
        return 'Hello'+query.name+',you are'+query.age+'years old';
    }
}
