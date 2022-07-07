import { TApp } from '@my-types/App.types';
import { TStatus, TTracker } from '@my-types/Tracker.types';
import { atom, useAtom } from 'jotai';
import { appAtom } from './appState';

import { currentWorkspaceAtom, useCurrentWorkspace, workspacesAtom } from './workspaces';

const searchAtom = atom('');

const filterAtom = atom('');

const currentTrackerAtom = atom<TTracker | undefined>((get) => {
  const app = get<TApp>(appAtom);
  if (app) {
    const idx = app.currentWorkspace[1];
    const filterQuery = get(filterAtom);

    if (idx === undefined) return undefined;
    if (!app.workspaces[idx]?.tracker) return undefined;

    const currWorkspaceTracker = app.workspaces[idx].tracker;

    const tracker = { ...currWorkspaceTracker };

    tracker.backlog = currWorkspaceTracker.backlog.filter(({ name, priority }) =>
      name.toLowerCase().includes(get(searchAtom)) && filterQuery.length > 0
        ? eval(filterQuery)
        : true
    );
    tracker['to-do'] = currWorkspaceTracker['to-do'].filter(({ name, priority }) =>
      name.toLowerCase().includes(get(searchAtom)) && filterQuery.length > 0
        ? eval(filterQuery)
        : true
    );
    tracker.doing = currWorkspaceTracker.doing.filter(({ name, priority }) =>
      name.toLowerCase().includes(get(searchAtom)) && filterQuery.length > 0
        ? eval(filterQuery)
        : true
    );
    tracker.done = currWorkspaceTracker.done.filter(({ name, priority }) =>
      name.toLowerCase().includes(get(searchAtom)) && filterQuery.length > 0
        ? eval(filterQuery)
        : true
    );

    return tracker;
  }
});

export const useSearchTask = () => useAtom(searchAtom);
export const useFilterTasks = () => useAtom(filterAtom);

export const useCurrentTracker = () => {
  const [tracker] = useAtom(currentTrackerAtom);

  const empty = { backlog: [], 'to-do': [], doing: [], done: [] };

  return {
    currentTracker: tracker ?? empty,
  };
};
