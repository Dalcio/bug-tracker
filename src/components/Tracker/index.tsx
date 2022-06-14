import { Modal, Stack } from '@mantine/core';
import { createContext, ReactChild, useContext, useState } from 'react';
import EditTask from './EditTask';

type TrackerContextProps = {
  editTask: (id: string) => void;
};

const TrackerContext = createContext<TrackerContextProps>({
  editTask: () => {},
});

export default function Tracker({ children }: { children: ReactChild[] | ReactChild }) {
  const [taskToEditId, setTaskToEditId] = useState<string | undefined>(undefined);

  const editTask = (id: string) => setTaskToEditId(id);

  return (
    <TrackerContext.Provider value={{ editTask }}>
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
