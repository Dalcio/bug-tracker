import { TApp } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

export const appAtom = atom<TApp>({} as TApp);

export const useAppSate = () => {
  const [appState, setAppState] = useAtom(appAtom);

  return { appState, setAppState };
};

export const useHydrateAppState = (initialState: TApp) =>
  useHydrateAtoms([[appAtom, initialState]] as const);

// export const getUser = atom((get) => get(appAtom));
