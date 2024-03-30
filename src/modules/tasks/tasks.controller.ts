import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, CreateTaskResponseDto } from './dtos';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async create(@Body() data: CreateTaskDto): Promise<CreateTaskResponseDto> {
    const createTask = await this.tasksService.create(data);

    return {
      message: 'Task created successfully',
      id: createTask.id,
      content: createTask.content,
      completed: createTask.completed,
    };
  }

  @Get()
  async findAll() {
    const tasks = await this.tasksService.findAll();

    return tasks;
  }
}
