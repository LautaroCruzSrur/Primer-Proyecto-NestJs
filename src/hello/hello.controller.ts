import { Controller, Get, Res, Req, HttpCode } from '@nestjs/common';
import { Request, Response } from 'express';

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
    
}
