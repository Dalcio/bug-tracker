import { TColors, TPriority, TStatus } from '@my-types/Tracker.types';

export const CColors: TColors[] = ['red', 'green', 'blue', 'yellow', 'gray'];

export const CStatus: TStatus[] = ['backlog', 'to-do', 'doing', 'done'];

export const CPriority: TPriority[] = ['Not Priority', 'Low', 'Normal', 'High', 'Urgent'];

export const CPriorityWithColors: {
  priority: TPriority;
  color: string;
}[] = [
  { priority: 'Not Priority', color: 'gray' },
  { priority: 'Low', color: 'green' },
  { priority: 'Normal', color: 'blue' },
  { priority: 'High', color: 'yellow' },
  { priority: 'Urgent', color: 'red' },
];
