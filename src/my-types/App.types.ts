import { TTracker } from './Tracker.types';

export type TNotificationType =
  | 'add-task'
  | 'delete-task'
  | 'move-task'
  | 'assign-person'
  | 'collaborator';

export type TNotification = {
  id: string;
  title: string;
  kind: TNotificationType;
  desc: string;
  notifiedBy: string;
  // notifiedBy: TCollaborator;
  date: Date;
};

export type TUser = {};

export type TCollaborator = {
  name: string;
  email: string;
};

export type TWorkspace = {
  workspaceName: string;
  notifications: TNotification[];
  collaborators: TCollaborator[];
  tracker: TTracker;
};

export type TApp = {
  user: TUser;
  workspaces: TWorkspace[];
};
