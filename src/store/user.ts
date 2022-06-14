import { TUser } from '@my-types/App.types';
import { atom, useAtom } from 'jotai';

const userAtom = atom<TUser>({});

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);

  return { user, setUser };
};

export const getUser = atom((get) => get(userAtom));
