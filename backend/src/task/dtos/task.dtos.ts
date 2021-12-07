import { IsString, IsNotEmpty, IsPositive,IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTaskDto {
  
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  readonly description: string;

  @IsPositive()
  readonly categoryId: number;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
