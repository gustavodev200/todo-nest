import { IsNotEmpty, IsString } from 'class-validator';

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
