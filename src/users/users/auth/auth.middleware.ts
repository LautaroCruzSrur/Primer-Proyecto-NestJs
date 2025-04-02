import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {authorization} = req.headers;

    if(!authorization){
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    if(authorization !== 'xyz123'){ //xyz123 es la autorizacion que necesita para authenticar
      throw new HttpException('Unauthorized', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
