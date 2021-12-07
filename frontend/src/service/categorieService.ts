import { Task, Category } from "@/utils/interfaces";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const baseUrl = "http://localhost:3000/category";

export const allCategories = async (): Promise<Category[]> => {
  const result = await fetch(`${baseUrl}`, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  });
  return result.json();
};

export const updateCategory = async (category: Category): Promise<Task[]> => {
  const { id } = category;
  const raw = JSON.stringify(category);
  const result = await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
    body: raw,
  });
  return result.json();
};

export const createCategory = async (category: Category): Promise<Task[]> => {
  const { id } = category;
  const raw = JSON.stringify(category);
  const result = await fetch(`${baseUrl}`, {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
    body: raw,
  });
  return result.json();
};

export const deleteCategory = async (category: Category): Promise<Task[]> => {
  const { id } = category;
  const raw = JSON.stringify(category);
  const result = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  });
  return result.json();
};
