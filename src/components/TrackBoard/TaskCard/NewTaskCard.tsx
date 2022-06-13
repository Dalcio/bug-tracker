import { Button, CloseButton, Stack, TextInput } from '@mantine/core';
import { TColors, TPriority, TStatus } from '@my-types/Tracker.types';
import { Row } from '@styles/core';
import { useState } from 'react';

import { AssignTo, Priority, DateHandler } from './Common';
import { useNewTaskStyles } from './TaskCard.styles';

type NewTaskCardProps = {
  onCancel: () => void;
  status: TStatus;
  color: TColors;
};

export default function NewTaskCard({ color, onCancel }: NewTaskCardProps) {
  const [title, setTitle] = useState<string>('');
  const [assignedPerson, setAssignedPerson] = useState<string | undefined>(undefined);
  const [priority, setPriority] = useState<TPriority>('Not Priority');
  const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
  const { classes } = useNewTaskStyles(color);

  const onSave = () => {};

  return (
    <Stack className={`bordered-container ${classes.container}`} p="sm">
      <Row spacing={0} className={classes.header}>
        <CloseButton onClick={onCancel} />
        <TextInput
          value={title}
          placeholder="Task name"
          onChange={(v) => setTitle(v.currentTarget.value)}
          mr="xs"
          style={{ flexGrow: 1 }}
        />
        <AssignTo assignedPerson={assignedPerson} setAssignedPerson={setAssignedPerson} />
      </Row>
      <Row className={classes.footer} justify="space-between">
        <Row>
          <Priority current={priority} setPriority={setPriority} />
          <DateHandler date={dueDate} setDate={setDueDate} label="Due Date" />
        </Row>
        <Button
          className={classes.save}
          onClick={onSave}
          radius="sm"
          size="xs"
          disabled={title.length === 0}
        >
          Save
        </Button>
      </Row>
    </Stack>
  );
}
