import { Task, Category } from "@/utils/interfaces";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
const baseUrl = "http://localhost:3000";

export const allTasks = async (): Promise<Task[]> => {
  const result = await fetch(`${baseUrl}/task`, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  });
  return result.json();
};

export const updateTask = async (task: Task): Promise<Task[]> => {
  const { id } = task;
  const raw = JSON.stringify(task);
  const result = await fetch(`${baseUrl}/task/${id}`, {
    method: "PUT",
    headers: myHeaders,
    redirect: "follow",
    body: raw,
  });
  return result.json();
};

export const createTask = async (task: Task): Promise<Task[]> => {
  const { id } = task;
  const raw = JSON.stringify(task);
  const result = await fetch(`${baseUrl}/task`, {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
    body: raw,
  });
  return result.json();
};

export const deleteTask = async (task: Task): Promise<Task[]> => {
  const { id } = task;
  const raw = JSON.stringify(task);
  const result = await fetch(`${baseUrl}/task/${id}`, {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  });
  return result.json();
};

