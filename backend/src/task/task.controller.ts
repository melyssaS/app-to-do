import {
  Controller,
  Get,
  Put,
  Delete,
  Post,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dtos/task.dtos';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks() {
    return this.taskService.findAll();
  }

  @Get(':taskId')
  getTask(@Param('taskId', ParseIntPipe) taskId: number) {
    return this.taskService.findOne(taskId);
  }

  @Post()
  createTask(@Body() payload: CreateTaskDto) {
    return this.taskService.create(payload);
  }

  @Put(':taskId')
  update(@Param("taskId", ParseIntPipe) taskId: number,@Body() payload: UpdateTaskDto){
    return this.taskService.update(taskId,payload);
  }

  @Delete(':taskId')
  delete(@Param('taskId', ParseIntPipe) taskId: number) {
    return this.taskService.delete(taskId);
  }
}
