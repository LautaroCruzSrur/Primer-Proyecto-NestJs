import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest() as Request

    console.log(request.url);// nos devuelve la request de la url

    if(request.headers['authorization']) return false //si no tiene el authorization devuelve un 404
    
    if(request.url === '/greet')return false //si solo tiene el greet da un 404

    return true; // si esta en false no nos devuelve el request url
  }
}
