import { TColors, TStatus } from '@my-types/Tracker.types';

export type StatusContainerProps = {
  status: TStatus;
  numOfTasks?: number;
  color: TColors;
};
