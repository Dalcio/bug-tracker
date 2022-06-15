import { TUser } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';
import { appAtom, AppStateProps } from './appState';

const userAtom = atom<TUser>(
  (get) => get<AppStateProps>(appAtom).user
  // (get, set, user) =>
  //   set(appAtom, {
  //     ...get(appAtom),
  //     user,
  //   })
);

export const getUser = () => {
  const [user] = useAtom(userAtom);

  return user;
};
