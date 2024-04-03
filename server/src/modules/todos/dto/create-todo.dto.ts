import { IsBoolean, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsBoolean()
  readonly isActive: boolean;

  @IsBoolean()
  readonly isDone: boolean;
}