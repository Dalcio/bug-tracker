import {
  ActionIcon,
  Button,
  CloseButton,
  Popover,
  Stack,
  Text,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { MagnifyingGlassIcon, PlusIcon, TrashIcon } from '@modulz/radix-icons';
import { useWorkspaces, useWorkspaceNames } from '@store/workspaces';
import { Row } from '@styles/core';
import { FormEventHandler, useState } from 'react';

const useWorkspaceComponent = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [onAdd, setOnAdd] = useState<boolean>(false);

  const { currentWorkspace, changeWorkspace, createWorkspace, deleteWorkspace } = useWorkspaces();
  const { workspaceNames, searchForWorkspace } = useWorkspaceNames();

  const form = useForm({ initialValues: { workspace: '' } });

  const onAddStart = () => setOnAdd(true);

  const onAddStop = () => setOnAdd(false);

  const handleOpen = () => {
    if (workspaceNames.length === 0) {
      onAddStart();
    }
    setOpened((prev) => !prev);
  };

  const onCLose = () => {
    onAdd && setOnAdd(false);
    setOpened(false);
  };

  const addWorkspace: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onCLose();
    createWorkspace(form.values.workspace);
  };

  const openWorkspace = (w: string) => {
    // onCLose();
    changeWorkspace(w);
  };

  return {
    currentWorkspace,
    opened,
    onAdd,
    form,
    deleteWorkspace,
    addWorkspace,
    openWorkspace,
    handleOpen,
    onCLose,
    onAddStart,
    onAddStop,
    workspaceNames,
    searchForWorkspace,
  };
};

export default function Workspaces() {
  const {
    currentWorkspace,
    workspaceNames,
    searchForWorkspace,
    opened,
    onAdd,
    form,
    deleteWorkspace,
    addWorkspace,
    openWorkspace,
    handleOpen,
    onCLose,
    onAddStart,
    onAddStop,
  } = useWorkspaceComponent();

  return (
    <Popover
      placement="end"
      opened={opened}
      target={
        <Tooltip label="Workspaces">
          <Button size="sm" variant="outline" onClick={handleOpen}>
            <Text weight={500}>
              {workspaceNames.length > 0 ? currentWorkspace : 'Create new workspace'}
            </Text>
          </Button>
        </Tooltip>
      }
      onClose={onCLose}
    >
      <Stack p={0}>
        {(workspaceNames.length > 0 && (
          <TextInput
            icon={<MagnifyingGlassIcon />}
            placeholder="Search github username"
            onChange={(event) => searchForWorkspace(event.currentTarget.value)}
          />
        )) || (
          <Text size="lg" weight={600}>
            First workspace
          </Text>
        )}
        <Stack spacing="xs" style={{ overflowY: 'auto', maxHeight: '200px' }}>
          {workspaceNames.map((name) => (
            <Row key={name} align="center" spacing={0}>
              <Button
                fullWidth
                disabled={name === currentWorkspace}
                onClick={() => openWorkspace(name)}
                variant="subtle"
              >
                {name}
              </Button>
              <Tooltip label="Delete workspace">
                <ActionIcon size="lg" color="red" onClick={() => deleteWorkspace(name)}>
                  <TrashIcon />
                </ActionIcon>
              </Tooltip>
            </Row>
          ))}
        </Stack>

        {!onAdd ? (
          <Button variant="subtle" onClick={onAddStart} leftIcon={<PlusIcon />} color="gray">
            New Workspace
          </Button>
        ) : (
          <form onSubmit={addWorkspace}>
            <Row align="center" spacing="xs">
              <Tooltip label="Cancel">
                <CloseButton onClick={onAddStop} />
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
