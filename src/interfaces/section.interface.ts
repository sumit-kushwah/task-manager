import { ITask } from "./task.interface";

export interface ISection {
  id: string;
  title: string;
  description?: string;
  projectId: string;
  tasks: ITask[];
}
