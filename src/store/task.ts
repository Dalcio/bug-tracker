import { TApp, TWorkspace } from '@my-types/App.types';
import { TStatus, TTask } from '@my-types/Tracker.types';
import { atom, useAtom } from 'jotai';

import { appAtom } from './appState';
import { currentWorkspaceAtom, workspacesAtom } from './workspaces';

const statusAtom = atom<(s: TStatus) => TTask[]>((get) => (status) => {
  const app = get<TApp>(appAtom);

  if (app) {
    const idx = app.currentWorkspace[1];

    if (idx !== undefined && idx >= 0) return app.workspaces[idx].tracker[status] ?? [];
  }

  return [];
});

export const useStatus = () => {
  const [getStatusTasks] = useAtom(statusAtom);
  const [[, currWorkspaceIdx]] = useAtom(currentWorkspaceAtom);
  const [workspaces, setWorkspaces] = useAtom(workspacesAtom);

  const createTask = (status: TStatus, task: TTask) => {
    if (currWorkspaceIdx !== undefined) {
      const tasks = getStatusTasks(status);
      const tempWorkspace = [...workspaces];
      tempWorkspace[currWorkspaceIdx].tracker[status] = [...tasks, task];
      setWorkspaces([...tempWorkspace]);
    }
  };

  const deleteTask = (status: TStatus, targetId: string) => {
    if (currWorkspaceIdx !== undefined) {
      const tasks = getStatusTasks(status).filter(({ id }) => id !== targetId);
      const tempWorkspace = [...workspaces];

      tempWorkspace[currWorkspaceIdx].tracker[status] = [...tasks];
      setWorkspaces([...tempWorkspace]);
    }
  };

  const reorder = (status: TStatus, sIdx: number, dIdx: number) => {
    if (currWorkspaceIdx !== undefined) {
      const tasks = getStatusTasks(status);

      const [removed] = tasks.splice(sIdx, 1);
      tasks.splice(dIdx, 0, removed);

      const tempWorkspace = [...workspaces];
      tempWorkspace[currWorkspaceIdx].tracker[status] = [...tasks];
      setWorkspaces([...tempWorkspace]);
    }
  };

  const moveTask = (sStatus: TStatus, sIdx: number, dStatus: TStatus, dIdx: number) => {
    if (currWorkspaceIdx !== undefined) {
      const tempWorkspace = [...workspaces];

      const sTasks = getStatusTasks(sStatus);
      const [removed] = sTasks.splice(sIdx, 1);
      tempWorkspace[currWorkspaceIdx].tracker[sStatus] = [...sTasks];

      const dTasks = getStatusTasks(dStatus);
      dTasks.splice(dIdx, 0, removed);
      tempWorkspace[currWorkspaceIdx].tracker[dStatus] = [...dTasks];

      setWorkspaces([...tempWorkspace]);
    }
  };

  return { createTask, deleteTask, reorder, moveTask };
};
