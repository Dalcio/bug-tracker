import { Button, CloseButton, Stack, TextInput } from '@mantine/core';
import { TColors, TPriority, TStatus, TTask } from '@my-types/Tracker.types';
import { useStatus } from '@store/task';
import { Row } from '@styles/core';
import { useState } from 'react';
import { v4 } from 'uuid';

import { AssignTo, Priority, DateHandler } from './Common';
import { useNewTaskStyles } from './TaskCard.styles';

type NewTaskCardProps = {
  onClose: () => void;
  status: TStatus;
  color: TColors;
};

export default function NewTaskCard({ color, status, onClose }: NewTaskCardProps) {
  const [name, setName] = useState<string>('');
  const [assignedPerson, setAssignedPerson] = useState<string | undefined>(undefined);
  const [priority, setPriority] = useState<TPriority>('Not Priority');
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const { classes } = useNewTaskStyles(color);
  const { createTask } = useStatus();

  const onSave = () => {
    const task: TTask = {
      name,
      priority,
      id: v4(),
      dueDate,
      assignedTo: assignedPerson,
      createdAt: new Date(),
    };

    createTask(status, task);
    onClose();
  };

  return (
    <Stack className={classes.container} p="sm">
      <Row spacing={0} p={0} align="center">
        <CloseButton onClick={onClose} />
        <TextInput
          value={name}
          placeholder="Task name"
          onChange={(v) => setName(v.currentTarget.value)}
          mr="xs"
          style={{ flexGrow: 1, display: 'flex' }}
        />
        <AssignTo assignedPerson={assignedPerson} setAssignedPerson={setAssignedPerson} />
      </Row>
      <Row p={0} justify="space-between">
        <Row p={0}>
          <Priority current={priority} setPriority={setPriority} />
          <DateHandler date={dueDate} setDate={setDueDate} label="Due Date" />
        </Row>
        <Button
          className={classes.save}
          onClick={onSave}
          radius="sm"
          size="xs"
          disabled={name.length === 0}
        >
          Save
        </Button>
      </Row>
    </Stack>
  );
}
