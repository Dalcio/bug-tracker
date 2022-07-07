import { TApp, TUser } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';
import { useState } from 'react';

import { appAtom } from './appState';

const userAtom = atom<TUser | undefined, TUser | undefined>(
  (get) => get<TApp>(appAtom)?.user ?? undefined,
  (get, set, user) =>
    set(appAtom, {
      ...(get<TApp>(appAtom) ?? { currentWorkspace: [], workspaces: [] }),
      user,
    })
);

export const getUser = () => {
  const [user] = useAtom(userAtom);

  return user ?? undefined;
};

export const useAuth = () => {
  const [, setUser] = useAtom(userAtom);
  const [, setApp] = useAtom(appAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signIn = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setUser({
        email: 'dalsiomacuetegarcia@gmail.com',
        name: 'Dálcio Garcia',
        username: 'dalcio',
      });
      setIsLoading(false);
    }, 4 * 1000);
  };

  const signOut = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setApp({} as TApp);
      setIsLoading(false);
    }, 4 * 1000);
  };

  return { signIn, signOut, isLoading };
};
