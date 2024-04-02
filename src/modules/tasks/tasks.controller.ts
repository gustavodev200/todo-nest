import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import {
  CreateTaskDto,
  CreateTaskResponseDto,
  DeleteTaskResponseDto,
  UpdateTaskDto,
  UpdateTaskResponseDto,
} from './dtos';

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
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTaskDto,
  ): Promise<UpdateTaskResponseDto> {
    const updateTask = await this.tasksService.update(id, data);

    return {
      message: 'Task updated successfully',
      id: updateTask.id,
      content: updateTask.content,
      completed: updateTask.completed,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DeleteTaskResponseDto> {
    const deleteTask = await this.tasksService.delete(id);

    return {
      message: 'Task deleted successfully',
      id: deleteTask.id,
    };
  }
}
