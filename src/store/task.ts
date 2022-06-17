import { TApp, TWorkspace } from '@my-types/App.types';
import { TStatus, TTask } from '@my-types/Tracker.types';
import { atom, useAtom } from 'jotai';
import { appAtom } from './appState';

import { currentWorkspaceAtom, workspacesAtom } from './workspaces';

const statusAtom = atom<(s: TStatus) => TTask[]>((get) => (status) => {
  const app = get<TApp>(appAtom);
  const idx = app.currentWorkspace[1];

  if (idx !== undefined && idx >= 0) return app.workspaces[idx].tracker[status] ?? [];

  return [];
});

export const useStatus = () => {
  const [getStatus] = useAtom(statusAtom);
  const [[, currWorkspaceIdx]] = useAtom(currentWorkspaceAtom);
  const [workspaces, setWorkspaces] = useAtom(workspacesAtom);

  const createTask = (status: TStatus, task: TTask) => {
    if (currWorkspaceIdx !== undefined) {
      const tasks = getStatus(status);
      const tempWorkspace = [...workspaces];
      tempWorkspace[currWorkspaceIdx].tracker[status] = [...tasks, task];
      setWorkspaces([...tempWorkspace]);
    }
  };

  const deleteTask = (status: TStatus, targetId: string) => {
    if (currWorkspaceIdx !== undefined) {
      const tasks = getStatus(status).filter(({ id }) => id !== targetId);
      const tempWorkspace = [...workspaces];

      tempWorkspace[currWorkspaceIdx].tracker[status] = [...tasks];
      setWorkspaces([...tempWorkspace]);
    }
  };

  const reorderSameOrigin = (status: string, sIdx: number, dIdx: number) => {
    if (currWorkspaceIdx !== undefined) {
      const tasks = getStatus(status as TStatus);

      const [removed] = tasks.splice(sIdx, 1);
      tasks.splice(dIdx, 0, removed);

      const tempWorkspace = [...workspaces];
      tempWorkspace[currWorkspaceIdx].tracker[status as TStatus] = [...tasks];
      setWorkspaces([...tempWorkspace]);
    }
  };

  return { createTask, deleteTask, reorderSameOrigin };
};
