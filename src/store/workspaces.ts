import { TWorkspace } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { appAtom, AppStateProps } from './appState';

const workspacesAtom = atom<TWorkspace[], TWorkspace[] | TWorkspace>(
  (get) => get<AppStateProps>(appAtom).workspaces,
  (get, set, update) =>
    set(appAtom, {
      ...get<AppStateProps>(appAtom),
      workspaces: Array.isArray(update)
        ? update
        : [...get<AppStateProps>(appAtom).workspaces, update],
    })
);

const currentWorkspaceAtom = atom<string, string>(
  (get) => get<AppStateProps>(appAtom).currentWorkspace,
  (get, set, currentWorkspace) =>
    set(appAtom, {
      ...get<AppStateProps>(appAtom),
      currentWorkspace,
    })
);

const filterAtom = atom('');
const workspaceNamesAtom = atom<string[]>((get) =>
  get<TWorkspace[]>(workspacesAtom)
    .filter(({ workspaceName }) => workspaceName.includes(get<string>(filterAtom).toLowerCase()))
    .map(({ workspaceName }) => workspaceName)
);

export const useWorkspaceNames = () => {
  const workspaceNames = useAtom(workspaceNamesAtom)[0];
  const searchForWorkspace = useAtom(filterAtom)[1];

  return { searchForWorkspace, workspaceNames };
};

export const useWorkspaces = () => {
  const [currentWorkspace, changeWorkspace] = useAtom(currentWorkspaceAtom);
  const [workspaces, setWorkspaces] = useAtom(workspacesAtom);

  const deleteWorkspace = (name: string) => {
    const temp = workspaces.filter(({ workspaceName }) => !workspaceName.includes(name));

    if (temp.length > 0 && currentWorkspace === name) {
      changeWorkspace(temp[0].workspaceName);
    } else if (temp.length === 0) {
      changeWorkspace('');
    }

    setWorkspaces(temp);
  };

  const createWorkspace = (name: string) => {
    const idx = workspaces.findIndex(
      ({ workspaceName }) => workspaceName.toLowerCase() === name.toLowerCase()
    );

    if (idx) {
      const newWorkspace: TWorkspace = {
        workspaceName: name.toLowerCase(),
        collaborators: [],
        notifications: [],
        tracker: {
          backlog: [],
          'to-do': [],
          doing: [],
          done: [],
        },
      };
      changeWorkspace(name);
      setWorkspaces([...workspaces, newWorkspace]);
    } else {
      alert('The workspace that you are trying to insert already exists');
    }
  };

  return { createWorkspace, changeWorkspace, deleteWorkspace, currentWorkspace };
};
