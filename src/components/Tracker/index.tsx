import { Stack } from '@mantine/core';
import { createContext, Dispatch, ReactChild, useContext, useReducer, useState } from 'react';

type StateProps = {
  view: 'board' | 'list';
};

const INITIAL_STATE = {
  view: 'board',
};

const TrackerContext = createContext<[{}, Dispatch<string>] | []>([]);

const reducer = (state: any, action: string) => {
  switch (action) {
    case 'toggle-view':
      return { ...state, view: state.view === 'board' ? 'list' : 'board' };
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

  const toggleView = () => dispatch && dispatch('toggle-view');

  return {
    ...(state as StateProps),
    toggleView,
  };
};
