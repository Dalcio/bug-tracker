import { Stack } from '@mantine/core';
import { createContext, Dispatch, ReactChild, useContext, useReducer, useState } from 'react';

type TrackerContextProps = {
  view: number;
  toggleView: (currentView: number) => void;
};

const TrackerContext = createContext<TrackerContextProps>({ view: 0, toggleView: () => {} });

export default function Tracker({ children }: { children: ReactChild[] | ReactChild }) {
  const [view, setView] = useState<number>(0);

  const toggleView = (currentView: number) => {
    setView(currentView);
  };

  return (
    <TrackerContext.Provider value={{ view, toggleView }}>
      <Stack style={{ flexGrow: 1 }}>{children}</Stack>
    </TrackerContext.Provider>
  );
}

export const useTracker = () => useContext(TrackerContext);
