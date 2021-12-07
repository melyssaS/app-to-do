import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Category } from 'src/category/category.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  title: string;
  @Column({ type: 'text' })
  description: string;
  @ManyToOne(() => Category, (category)=>category.tasks)
  category: Category;
}
