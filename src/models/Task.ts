import { Subtask } from './Subtask';

export interface Task {
    id: number;
    description: string;
    subtasks: Subtask[],
}