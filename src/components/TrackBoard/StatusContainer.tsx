import { ActionIcon, Button, Stack, Text } from '@mantine/core';
import { PlusIcon } from '@modulz/radix-icons';
import { TColors, TStatus, TTask } from '@my-types/Tracker.types';
import { Row } from '@styles/core';
import { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';

import { useStatusStyles } from './TrackBoard.styles';

import NewTaskCard from './TaskCard/NewTaskCard';
import TaskCard from './TaskCard/TaskCard';

type StatusContainerProps = {
  status: TStatus;
  color: TColors;
  currentWorkspace: string;
  tasks: TTask[];
};

const useStatusContainer = () => {
  const [onAdding, setOnAdding] = useState<boolean>(false);

  const addTask = () => setOnAdding(true);

  const abortAdding = () => setOnAdding(false);

  return { onAdding, addTask, abortAdding };
};

export default function StatusContainer({
  status,
  currentWorkspace,
  tasks,
  color,
}: StatusContainerProps) {
  const { classes } = useStatusStyles(color);
  const { onAdding, addTask, abortAdding } = useStatusContainer();

  const Header = (
    <Row className={classes.header}>
      <Row align="center">
        <Text weight={700}>{status.replace('-', ' ')}</Text>
        {tasks && tasks.length > 0 && <Text weight={700}>{tasks.length}</Text>}
      </Row>
      {!onAdding && (
        <ActionIcon className="add-button" onClick={addTask} size="xl">
          <PlusIcon />
        </ActionIcon>
      )}
    </Row>
  );

  return (
    <Stack p={0} spacing={0} className={classes.container}>
      {Header}
      <Stack p="sm" className={classes.body}>
        <Droppable droppableId={status}>
          {(providedDroppable, snapshot) => (
            <Stack
              className={classes.draggableSpace}
              p={0}
              {...providedDroppable.droppableProps}
              ref={providedDroppable.innerRef}
            >
              <>
                {tasks.map((task, index) => (
                  <TaskCard
                    key={task.id}
                    index={index}
                    {...task}
                    status={status}
                    workspace={currentWorkspace}
                    color={color}
                  />
                ))}
              </>
              {providedDroppable.placeholder}
            </Stack>
          )}
        </Droppable>
        {(!onAdding && (
          <Button variant="subtle" p="sm" onClick={addTask} leftIcon={<PlusIcon />} color="gray">
            NEW TASK
          </Button>
        )) || <NewTaskCard color={color} onClose={abortAdding} status={status} />}
      </Stack>
    </Stack>
  );
}
