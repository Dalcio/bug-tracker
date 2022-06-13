export type TPriority = 'Not Priority' | 'Low' | 'Normal' | 'High' | 'Urgent';

export type TPriorityColor = Record<TPriority, { color: string }>;

export type TTask = {
  id: string;
  name: string;
  assignedTo: string;
  desc?: string;
  dueDate?: Date;
  createdAt: Date;
  priority: TPriority;
};

export type TColors = 'red' | 'green' | 'blue' | 'yellow' | 'gray';

export type TStatus = 'backlog' | 'to-do' | 'doing' | 'done';

export type TTracker = Record<TStatus, TTask[]>;
