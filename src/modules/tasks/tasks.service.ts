import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos';
import { PrismaService } from '../prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: CreateTaskDto): Promise<Task> {
    const taskExists = await this.prisma.task.findFirst({
      where: {
        content: data.content,
      },
    });

    if (taskExists) {
      throw new Error('Task already exists');
    }

    return await this.prisma.task.create({
      data: data,
    });
  }
}
