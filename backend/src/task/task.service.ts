import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTaskDto, UpdateTaskDto } from './dtos/task.dtos';
import { Task } from './task.entity';
import { Category } from 'src/category/category.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task) private taskRepo: Repository<Task>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.taskRepo.find({ relations: ['category'] });
  }

  async findOne(id: number) {
    const task = await this.taskRepo.findOne(id,{ relations: ['category'] });
    if (!task) throw new NotFoundException(`Product #${id} not found`);
    return task;
  }

  delete(id: number) {
    return this.taskRepo.delete(id);
  }

  async update(id: number, payload: UpdateTaskDto) {
    const task = await this.findOne(id);
    if (payload.categoryId) {
      const category = await this.categoryRepo.findOne(payload.categoryId);
      task.category = category;
    }
    this.taskRepo.merge(task, payload);
    return this.taskRepo.save(task);
  }

  async create(payload: CreateTaskDto) {
    const newTask = this.taskRepo.create(payload);
    if (payload.categoryId) {
      const category = await this.categoryRepo.findOne(payload.categoryId);
      newTask.category = category;
    }
    return this.taskRepo.save(newTask);
  }
}
