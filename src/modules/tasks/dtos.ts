import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  content: string;
}

export class CreateTaskResponseDto {
  message: string;
  content: string;
  completed: boolean;
  id: string;
}

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  content?: string;

  @IsBoolean()
  completed?: boolean;
}

export class UpdateTaskResponseDto {
  message: string;
  content?: string;
  completed?: boolean;
  id?: string;
}

export class DeleteTaskResponseDto {
  message: string;
  id: string;
}
