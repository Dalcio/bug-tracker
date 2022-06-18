import { TApp } from '@my-types/App.types';
import { TStatus, TTracker } from '@my-types/Tracker.types';
import { atom, useAtom } from 'jotai';
import { appAtom } from './appState';

import { currentWorkspaceAtom, useCurrentWorkspace, workspacesAtom } from './workspaces';

const filterTasksAtom = atom('');

const currentTrackerAtom = atom<TTracker | undefined>((get) => {
  const app = get<TApp>(appAtom);
  const idx = app.currentWorkspace[1];

  if (idx === undefined) return undefined;
  const currWorkspaceTracker = app.workspaces[idx].tracker;

  const tracker = { ...currWorkspaceTracker };

  tracker.backlog = currWorkspaceTracker.backlog.filter(({ name }) =>
    name.toLowerCase().includes(get(filterTasksAtom))
  );
  tracker['to-do'] = currWorkspaceTracker['to-do'].filter(({ name }) =>
    name.toLowerCase().includes(get(filterTasksAtom))
  );
  tracker.doing = currWorkspaceTracker.doing.filter(({ name }) =>
    name.toLowerCase().includes(get(filterTasksAtom))
  );
  tracker.done = currWorkspaceTracker.done.filter(({ name }) =>
    name.toLowerCase().includes(get(filterTasksAtom))
  );

  return tracker;
});

export const useSearchTask = () => useAtom(filterTasksAtom);

export const useCurrentTracker = () => {
  const [tracker] = useAtom(currentTrackerAtom);

  const empty = { backlog: [], 'to-do': [], doing: [], done: [] };

  return {
    currentTracker: tracker ?? empty,
  };
};
