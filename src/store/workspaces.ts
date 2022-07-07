import { TApp, TCurrentWorkspace, TWorkspace } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';

import { appAtom } from './appState';

export const workspacesAtom = atom<TWorkspace[], TWorkspace[] | TWorkspace>(
  (get) => get<TApp>(appAtom)?.workspaces ?? [],
  (get, set, update) =>
    set(appAtom, {
      ...get<TApp>(appAtom),
      workspaces: Array.isArray(update) ? update : [...get<TApp>(appAtom).workspaces, update],
    })
);

export const currentWorkspaceAtom = atom<TCurrentWorkspace, TCurrentWorkspace>(
  (get) => get<TApp>(appAtom)?.currentWorkspace ?? [],
  (get, set, currentWorkspace) =>
    set(appAtom, {
      ...get<TApp>(appAtom),
      currentWorkspace,
    })
);

const filterAtom = atom('');
const workspaceNamesAtom = atom<string[]>((get) =>
  get<TWorkspace[]>(workspacesAtom)
    .filter(({ workspaceName }) => workspaceName.includes(get<string>(filterAtom).toLowerCase()))
    .map(({ workspaceName }) => workspaceName)
);

export const useCurrentWorkspace = () => useAtom(currentWorkspaceAtom)[0];

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

    if (temp.length > 0 && currentWorkspace[0] === name) {
      changeWorkspace([temp[0].workspaceName, 0]);
    } else if (temp.length === 0) {
      changeWorkspace([]);
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
      changeWorkspace([name, workspaces.length]);
      setWorkspaces([...workspaces, newWorkspace]);
    } else {
      alert('The workspace that you are trying to insert already exists');
    }
  };

  return { createWorkspace, changeWorkspace, deleteWorkspace, currentWorkspace, workspaces };
};
