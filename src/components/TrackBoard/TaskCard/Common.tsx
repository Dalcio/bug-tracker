import Collaborator from '@components/Collaborator';
import { CPriorityWithColors } from '@constants/Tracker.const';
import { Avatar, ActionIcon, Button, Popover, Stack, TextInput, Tooltip } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { BookmarkIcon, CalendarIcon, MagnifyingGlassIcon } from '@modulz/radix-icons';
import { TPriority } from '@my-types/Tracker.types';
import { useState } from 'react';

import { AssignToProps, PriorityProps, HandleDateProps } from './Common.props';

export function AssignTo({ assignedPerson, setAssignedPerson }: AssignToProps) {
  const [opened, setOpened] = useState<boolean>(false);

  // const { collaborators } = appStore()

  const handleAssignTo = (collaborator: string) => {
    setOpened(false);
    setAssignedPerson(collaborator);
  };

  return (
    <Popover
      opened={opened}
      target={
        <Tooltip label="Set Priority">
          <Avatar
            style={{ display: 'inline-block' }}
            alt={assignedPerson}
            radius="lg"
            p={0}
            mt="xs"
            m={0}
            onClick={() => setOpened(true)}
          >
            {assignedPerson &&
              assignedPerson.length > 0 &&
              assignedPerson.substring(0, 2).toLocaleUpperCase()}
          </Avatar>
        </Tooltip>
      }
      onClose={() => setOpened(false)}
    >
      <Stack p={0}>
        <TextInput icon={<MagnifyingGlassIcon />} placeholder="Search github username" />
        <Button
          variant="filled"
          color="gray"
          onClick={() => {
            setOpened(false);
            setAssignedPerson(undefined);
          }}
        >
          none
        </Button>
        <Stack spacing="xs" style={{ overflowY: 'auto', maxHeight: '200px' }}>
          <Collaborator username="dalcio" onClick={handleAssignTo} />
          <Collaborator username="ezedcode" onClick={handleAssignTo} />
          <Collaborator username="etcode" onClick={handleAssignTo} />
          <Collaborator username="ethacode" onClick={handleAssignTo} />
          <Collaborator username="ethacode" onClick={handleAssignTo} />
          <Collaborator username="ethacode" onClick={handleAssignTo} />
          <Collaborator username="ethacode" onClick={handleAssignTo} />
          <Collaborator username="ethacode" onClick={handleAssignTo} />
          <Collaborator username="ethacode" onClick={handleAssignTo} />
          <Collaborator username="ethacode" onClick={handleAssignTo} />
        </Stack>
      </Stack>
    </Popover>
  );
}

export function Priority({ setPriority, current, label }: PriorityProps) {
  const [opened, setOpened] = useState<boolean>(false);

  const currentPriority = CPriorityWithColors.filter(({ priority }) => priority === current)[0];

  const handleSetPriority = (priority: TPriority) => {
    setOpened(false);
    setPriority && setPriority(priority);
  };

  return (
    <Popover
      opened={opened}
      target={
        <Tooltip label={label ?? 'Set Priority'}>
          <ActionIcon color={currentPriority.color} onClick={() => setOpened(true)}>
            <BookmarkIcon />
          </ActionIcon>
        </Tooltip>
      }
      onClose={() => setOpened(false)}
    >
      <Stack spacing={0}>
        {CPriorityWithColors.map(({ color, priority }) => (
          <Button
            variant="subtle"
            style={{ display: 'flex' }}
            onClick={() => handleSetPriority(priority)}
            leftIcon={<BookmarkIcon />}
            color={color}
          >
            {priority}
          </Button>
        ))}
      </Stack>
    </Popover>
  );
}

export function DateHandler({ date, setDate, label, withHover }: HandleDateProps) {
  const [opened, setOpened] = useState<boolean>(false);

  const handleDate = (newDate: Date) => {
    setOpened(false);
    newDate && setDate && setDate(newDate);
  };

  return (
    <Popover
      opened={opened}
      target={
        <Tooltip label={label}>
          <ActionIcon onClick={() => setOpened(true)}>
            <CalendarIcon />
          </ActionIcon>
        </Tooltip>
      }
      onClose={() => setOpened(false)}
      onMouseOver={() => withHover && setOpened(true)}
      onMouseOut={() => withHover && setOpened(false)}
    >
      <Calendar value={date} onChange={handleDate} />
    </Popover>
  );
}
