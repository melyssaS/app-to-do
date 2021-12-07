import { IsString, IsNotEmpty} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from 'src/task/dtos/task.dtos';

export class CreateCategoryDto{
    @IsNotEmpty()
    @IsString()
    readonly title: string;
}

export class UpdateCategoryDto extends PartialType(CreateTaskDto){}