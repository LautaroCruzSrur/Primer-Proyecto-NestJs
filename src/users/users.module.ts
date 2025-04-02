import { Logger, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './users/auth/auth.middleware';
import { PaymentsModule } from './payments/payments.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [PaymentsModule]
})
export class UsersModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      {path: '/users', method: RequestMethod.GET}, {path: '/users', method: RequestMethod.POST} ).apply(AuthMiddleware).forRoutes('users')//la ruta users pasan por el middleware solo para el metodo GET y POST. 1) el primero solo sirve para registrar las peticiones que llegan y el 2 middelware para authenticar si el usuario puede o no entrar en la url.
  }

}
