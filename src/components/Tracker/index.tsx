import { Stack } from '@mantine/core';
import { createContext, Dispatch, ReactChild, useContext, useReducer, useState } from 'react';

type StateProps = {};

const INITIAL_STATE = {};

const TrackerContext = createContext<[{}, Dispatch<string>] | []>([]);

const reducer = (state: any, action: string) => {
  switch (action) {
    default:
      return state;
  }
};

export default function Tracker({ children }: { children: ReactChild[] | ReactChild }) {
  return (
    <TrackerContext.Provider value={useReducer(reducer, INITIAL_STATE)}>
      <Stack style={{ flexGrow: 1 }}>{children}</Stack>
    </TrackerContext.Provider>
  );
}

export const useTracker = () => {
  const [state, dispatch] = useContext(TrackerContext);

  return {
    ...(state as StateProps),
  };
};
