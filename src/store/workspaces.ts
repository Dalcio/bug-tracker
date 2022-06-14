import { TWorkspace } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { appAtom, AppStateProps } from './appState';

const workspacesAtom = atom((get) => {
  const { workspaces, currentWorkspace } = get<AppStateProps>(appAtom);

  return { workspaces, currentWorkspace };
});

export const useWorkspaces = () => {
  const [w] = useAtom(workspacesAtom);
  const [, setW] = useAtom(appAtom);
  const [workspaces, setWorkSpaces] = useState<string[]>([]);

  useEffect(() => {
    const temWorkspace = w.workspaces.map(({ workspaceName }) => workspaceName);
    setWorkSpaces([...temWorkspace]);
  }, [w]);

  const filterWorkspace = (str: string) => {
    if (str.length > 0) {
      const filtered = workspaces.filter((v) => v.includes(str));
      setWorkSpaces([...filtered]);
    } else {
      const temWorkspace = w.workspaces.map(({ workspaceName }) => workspaceName);
      setWorkSpaces([...temWorkspace]);
    }
  };

  const changeWorkspace = (target: string) => {
    if (target !== w.currentWorkspace) {
      setW((prev) => ({ ...prev, currentWorkspace: target }));
    }
  };

  const createWorkspace = (name: string) => {
    const idx = workspaces.findIndex((value) => value.toLowerCase() === name.toLowerCase());

    if (idx) {
      const newWorkspace: TWorkspace = {
        workspaceName: name,
        collaborators: [],
        notifications: [],
        tracker: {
          backlog: [],
          'to-do': [],
          doing: [],
          done: [],
        },
      };

      setW((prev) => ({
        ...prev,
        currentWorkspace: name,
        workspaces: [...prev.workspaces, newWorkspace],
      }));
    } else {
      alert('The workspace that you are trying to insert already exists');
    }
  };

  return {
    currentWorkspace: w.currentWorkspace,
    workspaces,
    createWorkspace,
    changeWorkspace,
    filterWorkspace,
  };
};
