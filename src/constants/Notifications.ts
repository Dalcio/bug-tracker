import { TNotificationType } from '@my-types/App.types';

export type CNotificationsSMSType = {
  task?: string;
  f?: string;
  t?: string;
  assigned?: string;
  collaborator?: string;
};

export const CNotificationsSMS = ({
  task,
  assigned,
  f,
  t,
  collaborator,
}: CNotificationsSMSType): Record<TNotificationType, string> => ({
  'add-task': `A new task ${task} was created.`,
  'delete-task': `The task ${task} was deleted.`,
  'move-task': `The task ${task} was moved from ${f} to ${t}.`,
  'assign-person': `The task ${task} was assign to ${assigned}`,
  collaborator: `A new collaborator ${collaborator} add to the project`,
});

export const CNotificationsColors: Record<TNotificationType, string> = {
  'add-task': 'green',
  'delete-task': 'red',
  'move-task': 'yellow',
  'assign-person': 'blue',
  collaborator: 'violet',
};
