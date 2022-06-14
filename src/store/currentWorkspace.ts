import { atom, useAtom } from 'jotai';

const currentWorkspace = atom<string>('');

export const useCurrentWorkspace = () => {
  const [workspace, setWorkspace] = useAtom(currentWorkspace);

  return { workspace, setWorkspace };
};
