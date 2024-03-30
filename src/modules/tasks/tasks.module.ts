import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TasksController],
  providers: [PrismaService, TasksService],
})
export class TasksModule {}
