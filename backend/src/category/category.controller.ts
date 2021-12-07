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
import { CategoryService } from './category.service';

import { CreateCategoryDto, UpdateCategoryDto } from './dtos/category.dtos';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get()
  getTasks() {
    return this.categoryService.findAll();
  }

  @Get(':categoryId')
  getTask(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoryService.findOne(categoryId);
  }

  @Post()
  createTask(@Body() payload: CreateCategoryDto) {
    return this.categoryService.create(payload);
  }

  @Put(':categoryId')
  update(
    @Param('categoryId', ParseIntPipe) categoryId: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    return this.categoryService.update(categoryId, payload);
  }

  @Delete(':categoryId')
  delete(@Param('categoryId', ParseIntPipe) categoryId: number) {
    return this.categoryService.delete(categoryId);
  }
}
