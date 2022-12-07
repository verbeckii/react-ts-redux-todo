import { Task } from './Task';

export interface Todo {
    id: number;
    description: string;
    tasks: Task[],
}