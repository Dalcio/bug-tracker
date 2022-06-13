import { TPriority } from '@my-types/Tracker.types';

export type PriorityProps = {
  setPriority?: (priority: TPriority) => void;
  current: TPriority;
  label?: string;
};

export type TagProps = {};

export type AssignToProps = {
  assignedPerson: string | undefined;
  setAssignedPerson: (name: string | undefined) => void;
};

export type HandleDateProps = {
  label: string;
  date: Date | undefined;
  withHover?: boolean;
  setDate?: (date: Date | undefined) => void;
};
