import Collaborator from '@components/Collaborator';
import {
  ActionIcon,
  Alert,
  Avatar,
  Box,
  Button,
  CloseButton,
  createStyles,
  Popover,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { EnvelopeClosedIcon, MagnifyingGlassIcon, PlusIcon } from '@modulz/radix-icons';
import { Row } from '@styles/core';
import { FormEventHandler, useState } from 'react';
import { useCollaboratorStyles } from './Header.styles';

export default function Workspaces() {
  const [opened, setOpened] = useState<boolean>(false);
  const [onAdd, setOnAdd] = useState<boolean>(false);

  const form = useForm({ initialValues: { workspace: '' } });

  const { classes } = useCollaboratorStyles();

  const searchForWorkSpace = (text: string) => {};

  const onAddStart = () => setOnAdd(true);

  const addWorkspace: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setOnAdd(false);
    setOpened(false);
    alert(`An workspace will be sent to ${form.values.workspace}`);
  };

  const openWorkspace = (w: string) => {
    alert('opening this workspace');
  };

  return (
    <Popover
      placement="end"
      opened={opened}
      target={
        <Tooltip label="Workspaces">
          <Button size="sm" variant="outline" onClick={() => setOpened((prev) => !prev)}>
            <Text weight={500}>Current workspace</Text>
          </Button>
        </Tooltip>
      }
      onClose={() => {
        onAdd && setOnAdd(false);
        setOpened(false);
      }}
    >
      <Stack p={0}>
        <TextInput
          icon={<MagnifyingGlassIcon />}
          placeholder="Search github username"
          onChange={(event) => searchForWorkSpace(event.currentTarget.value)}
        />
        <Stack spacing="xs" style={{ overflowY: 'auto', maxHeight: '200px' }}>
          <Button onClick={() => openWorkspace('open-this-workspace')} variant="subtle">
            {'workspca x'}
          </Button>
          <Button onClick={() => openWorkspace('open-this-workspace')} variant="subtle">
            {'workspca y'}
          </Button>
        </Stack>

        {!onAdd ? (
          <Button variant="subtle" onClick={onAddStart} leftIcon={<PlusIcon />} color="gray">
            New Collaborator
          </Button>
        ) : (
          <form onSubmit={addWorkspace}>
            <Row align="center" spacing="xs">
              <Tooltip label="Cancel">
                <CloseButton onClick={() => setOnAdd(false)} />
              </Tooltip>
              <TextInput
                placeholder="New workspace name"
                value={form.values.workspace}
                required
                onChange={(event) => form.setFieldValue('workspace', event.currentTarget.value)}
              />
              <Button type="submit">Create</Button>
            </Row>
          </form>
        )}
      </Stack>
    </Popover>
  );
}
