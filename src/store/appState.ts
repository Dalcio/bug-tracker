import { APP_DATA } from '@constants';
import { TApp } from '@my-types/App.types';
import { setCookies } from 'cookies-next';
import { atom, useAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { useEffect } from 'react';

export const appAtom = atom<TApp>({} as TApp);

export const useAppSate = () => {
  const [appState, setAppState] = useAtom(appAtom);

  useEffect(() => {
    window.localStorage.setItem(APP_DATA, JSON.stringify(appState));
  }, [appState]);

  return { appState, setAppState };
};

export const useHydrateAppState = (initialState: TApp) =>
  useHydrateAtoms([[appAtom, initialState]] as const);
