export interface ITask {
  id: string;
  name: string;
  description?: string;
  dueDate?: Date;
  priority?: 'p1' | 'p2' | 'p3' | 'p4';
  labels?: string[];
  sectionId: string;
  subtasks?: ITask[];
}
