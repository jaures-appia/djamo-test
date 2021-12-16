import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GetTasksHandler } from './queries/handler/get-tasks.handler';
import { TaskController } from './task.controller';

@Module({
  imports: [CqrsModule, PrismaModule],
  controllers: [TaskController],
  providers: [GetTasksHandler],
})
export class TaskModule {}
