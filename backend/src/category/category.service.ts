import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryDto, UpdateCategoryDto } from './dtos/category.dtos';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepo.find();
  }

  async findOne(id: number) {
    const category = await this.categoryRepo.findOne(id,{
      relations: ['tasks'],
    });
    if (!category) throw new NotFoundException(`Categorya #${id} not found`);
    return category;
  }

  delete(id: number) {
    return this.categoryRepo.delete(id);
  }

  async update(id: number, payload: UpdateCategoryDto) {
    const category = await this.findOne(id);
    this.categoryRepo.merge(category, payload);
    return this.categoryRepo.save(category);
  }

  create(payload: CreateCategoryDto) {
    const newcategory = this.categoryRepo.create(payload);
    return this.categoryRepo.save(newcategory);
  }
}
