import { TApp, TUser } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';
import { appAtom } from './appState';

const userAtom = atom<TUser>((get) => get<TApp>(appAtom).user);

export const getUser = () => {
  const [user] = useAtom(userAtom);

  return user ?? null;
};
