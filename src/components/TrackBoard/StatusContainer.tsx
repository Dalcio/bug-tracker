import { ActionIcon, Box, Button, Stack, Text } from '@mantine/core';
import { PlusIcon } from '@modulz/radix-icons';
import { TColors, TStatus } from '@my-types/Tracker.types';
import { Row } from '@styles/core';
import { useState } from 'react';

import { useStatusStyles } from './TrackBoard.styles';

import NewTaskCard from './TaskCard/NewTaskCard';
import TaskCard from './TaskCard/TaskCard';

type StatusContainerProps = {
  status: TStatus;
  numOfTasks?: number;
  color: TColors;
};

export default function StatusContainer({ status, numOfTasks, color }: StatusContainerProps) {
  const [onAdding, setOnAdding] = useState<boolean>(false);
  const { classes } = useStatusStyles(color);

  const workspace = 'Workspace';

  const addTask = () => setOnAdding(true);

  const abortAdding = () => setOnAdding(false);

  const Header = (
    <Row className={classes.header}>
      <Row align="center">
        <Text weight={700}>{status.replace('-', ' ')}</Text>
        {numOfTasks && <Text weight={700}>{numOfTasks}</Text>}
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
        <Stack p={0}>
          <TaskCard
            id={'Task-id-task-bla'}
            workspace={workspace}
            name={'I am the task bla'}
            assignedTo={'dalcio'}
            createdAt={new Date()}
            dueDate={new Date()}
            priority={'Not Priority'}
            color={color}
            tags={['react', 'angular']}
          />
        </Stack>
        {(!onAdding && (
          <Button variant="subtle" p="sm" onClick={addTask} leftIcon={<PlusIcon />} color="gray">
            NEW TASK
          </Button>
        )) || <NewTaskCard color={color} onCancel={abortAdding} status={status} />}
      </Stack>
    </Stack>
  );
}
