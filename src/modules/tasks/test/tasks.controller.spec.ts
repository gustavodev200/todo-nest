import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from '../tasks.controller';
import { TasksService } from '../tasks.service';
import { CreateTaskDto, UpdateTaskDto } from '../dtos';

const uuid = 'cbd7034a-da4e-4168-a09c-20553512bc76';

describe('TaskService', () => {
  let taskController: TasksController;

  const mockUsersService = {
    create: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [{ provide: TasksService, useValue: mockUsersService }],
    }).compile();

    taskController = module.get<TasksController>(TasksController);
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(taskController).toBeDefined();
  });

  it('should create a task', async () => {
    const taskDTO: CreateTaskDto = {
      content: 'Aprender testes unitarios',
    };
    await taskController.create(taskDTO);

    //espera que o mock.create seja chamado apenas uma vez.
    expect(mockUsersService.create).toHaveBeenCalledTimes(1);

    //espera que o mock.create seja chamado com o taskDTO.
    expect(mockUsersService.create).toHaveBeenCalledWith(taskDTO);
  });

  it('should findAll tasks', async () => {
    await taskController.findAll();

    expect(mockUsersService.findAll).toHaveBeenCalledTimes(1);

    expect(mockUsersService.findAll).toHaveBeenCalledWith();
  });

  it('should update tasks', async () => {
    const taskUpdateDTO: UpdateTaskDto = {
      content: 'Aprender NestJS + Prisma',
    };

    await taskController.update(uuid, taskUpdateDTO);

    expect(mockUsersService.update).toHaveBeenCalledTimes(1);

    expect(mockUsersService.update).toHaveBeenCalledWith(uuid, taskUpdateDTO);
  });
});
