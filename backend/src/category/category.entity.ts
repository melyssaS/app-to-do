import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

import { Task } from "src/task/task.entity";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    id:number;
    @Column({type:'varchar',length:50})
    title:string;
    @OneToMany(()=>Task,(task)=>task.category)
    tasks:Task[];
}