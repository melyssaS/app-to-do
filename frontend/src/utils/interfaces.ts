export interface Category{
    id: null;
    title: string;

  }

export interface Task {
    id: null;
    title: string;
    description: string;
    category?: Category
    categoryId?:number
  }