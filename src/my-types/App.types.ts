import { TTracker } from './Tracker.types';

export type TNotificationType = '';
export type TNotification = {
  id: string;
  title: string;
  type: TNotificationType;
  desc: string;
  notifiedBy: TCollaborator;
};

export type TUser = {};

export type TCollaborator = {
  name: string;
  email: string;
};

export type TWorkspace = {
  space: string;
  notifications: TNotification[];
  collaborators: TCollaborator[];
  tracker: TTracker;
};

export type TApp = {
  user: TUser;
  workspaces: TWorkspace[];
};
