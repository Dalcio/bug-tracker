import { useAtom } from 'jotai';

import { useCurrentWorkspace, workspacesAtom } from './workspaces';

export const useCurrentTracker = () => {
  const [workspaces] = useAtom(workspacesAtom);
  const [, currIdx] = useCurrentWorkspace();

  const empty = { backlog: [], 'to-do': [], doing: [], done: [] };

  return {
    currentTracker:
      (currIdx !== undefined && currIdx >= 0 && (workspaces[currIdx]?.tracker ?? empty)) || empty,
  };
};
