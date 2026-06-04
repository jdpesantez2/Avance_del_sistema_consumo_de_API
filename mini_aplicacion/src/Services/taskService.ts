import axios from 'axios';
import type { Task } from '../types/Task';

const API = 'http://localhost:3000/tasks';

export const getAllTasks = async (): Promise<Task[]> => {
  const response = await axios.get(API);
  return response.data;
};

export const createTask = async (task: Partial<Task>): Promise<Task> => {
  const response = await axios.post(API, task);
  return response.data;
};

export const updateTask = async (id: number, task: Partial<Task>): Promise<Task> => {
  const response = await axios.patch(`${API}/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API}/${id}`);
};