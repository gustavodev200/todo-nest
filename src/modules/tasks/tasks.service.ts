import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dtos';
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

  async findAll(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();

    return tasks;
  }

  async update(id: string, data: UpdateTaskDto): Promise<Task> {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!taskExists) {
      throw new Error('Task not found');
    }

    const contentTaskExists = await this.prisma.task.findFirst({
      where: {
        content: data.content,
      },
    });

    if (contentTaskExists) {
      throw new Error('Task already exists');
    }

    return await this.prisma.task.update({
      where: {
        id,
      },
      data: data,
    });
  }

  async delete(id: string) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!taskExists) {
      throw new Error('Task not found');
    }

    return await this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
