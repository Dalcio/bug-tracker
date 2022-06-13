import { TPriority } from '@my-types/Tracker.types';

export type PriorityProps = {
  setPriority: (priority: TPriority) => void;
  current: TPriority;
};

export type TagProps = {};

export type AssignToProps = {
  assignedPerson: string | undefined;
  setAssignedPerson: (name: string | undefined) => void;
};

export type TaskDateProps = {
  label: string;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
};
