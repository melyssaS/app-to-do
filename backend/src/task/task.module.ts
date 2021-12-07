import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CategoryController } from 'src/category/category.controller';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Task,Category])],
  controllers:[TaskController,CategoryController],
  providers: [TaskService,CategoryService],
  exports:[TaskService]
})
export class TaskModule {}


