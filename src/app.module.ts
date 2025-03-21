import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsService } from './projects/projects.service';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [TaskModule, ProjectsModule, AuthModule, UsersModule],
  providers: [ProjectsService],
  controllers: [HelloController],
})
export class AppModule {}
