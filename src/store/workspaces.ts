import { TWorkspace } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';

const workspacesAtom = atom<TWorkspace[]>([]);

export const useWorkspaces = () => {
  const [workspaces, setWorkspaces] = useAtom(workspacesAtom);

  const updateWorkspace = (idx: number) => {};

  return { workspaces, setWorkspaces };
};

export const getWorkspace = atom((get) => get(workspacesAtom));
