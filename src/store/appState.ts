import { TUser, TWorkspace } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

export type AppStateProps = {
  user: TUser;
  currentWorkspace: string;
  workspaces: TWorkspace[];
};

export const appAtom = atom<AppStateProps>({} as AppStateProps);

export const useAppSate = () => {
  const [appState, setAppState] = useAtom(appAtom);

  return { appState, setAppState };
};

export const useHydrateAppState = (initialState: AppStateProps) =>
  useHydrateAtoms([[appAtom, initialState]] as const);

// export const getUser = atom((get) => get(appAtom));
