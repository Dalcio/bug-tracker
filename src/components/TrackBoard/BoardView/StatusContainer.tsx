import { ActionIcon, Box, Button, Stack, Text } from '@mantine/core';
import { PlusIcon } from '@modulz/radix-icons';
import { Row } from '@styles/core';
import { useState } from 'react';

import { useStatusStyles } from './BoardView.styles';
import { StatusContainerProps } from './BoardView.types';

import NewTaskCard from '../TaskCard/NewTaskCard';

export default function StatusContainer({ status, numOfTasks, color }: StatusContainerProps) {
  const [onAdding, setOnAdding] = useState<boolean>(false);
  const { classes } = useStatusStyles(color);

  const addTask = () => setOnAdding(true);

  const abortAdding = () => setOnAdding(false);

  return (
    <Box className={classes.container} style={{ flexGrow: 1, minWidth: '254px' }}>
      <Row className={classes.header}>
        <Text weight={700}>{status.replace('-', ' ')}</Text>
        {!onAdding && (
          <ActionIcon className="add-button" onClick={addTask} size="xl">
            <PlusIcon />
          </ActionIcon>
        )}
      </Row>
      <Stack className={classes.body}>
        <h1>Task List</h1>
        {(!onAdding && (
          <Button variant="subtle" onClick={addTask} leftIcon={<PlusIcon />} color="gray">
            NEW TASK
          </Button>
        )) || <NewTaskCard color={color} onCancel={abortAdding} status={status} />}
      </Stack>
    </Box>
  );
}
