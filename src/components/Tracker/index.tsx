import { Modal, Stack } from '@mantine/core';
import { createContext, Dispatch, ReactChild, useContext, useReducer, useState } from 'react';
import EditTask from './EditTask';

type TrackerContextProps = {
  view: number;
  toggleView: (currentView: number) => void;
  editTask: (id: string) => void;
};

const TrackerContext = createContext<TrackerContextProps>({
  view: 0,
  toggleView: () => {},
  editTask: () => {},
});

export default function Tracker({ children }: { children: ReactChild[] | ReactChild }) {
  const [view, setView] = useState<number>(0);
  const [taskToEditId, setTaskToEditId] = useState<string | undefined>(undefined);

  const toggleView = (currentView: number) => {
    setView(currentView);
  };

  const editTask = (id: string) => setTaskToEditId(id);

  return (
    <TrackerContext.Provider value={{ view, toggleView, editTask }}>
      <Stack style={{ flexGrow: 1 }}>{children}</Stack>
      {taskToEditId && (
        <Modal opened={!!taskToEditId} onClose={() => setTaskToEditId(undefined)}>
          <EditTask id={taskToEditId} />
        </Modal>
      )}
    </TrackerContext.Provider>
  );
}

export const useTracker = () => useContext(TrackerContext);
