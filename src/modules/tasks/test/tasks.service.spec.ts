import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../tasks.service';

describe('TaskService', () => {
  let taskService: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    taskService = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(taskService).toBeDefined();
  });
});
