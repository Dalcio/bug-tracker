import { Button, CloseButton, Popover, Stack, Text, TextInput, Tooltip } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { MagnifyingGlassIcon, PlusIcon } from '@modulz/radix-icons';
import { useWorkspaces } from '@store/workspaces';
import { Row } from '@styles/core';
import { FormEventHandler, useState } from 'react';

const useWorkspaceComponent = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [onAdd, setOnAdd] = useState<boolean>(false);

  const { changeWorkspace, createWorkspace } = useWorkspaces();

  const form = useForm({ initialValues: { workspace: '' } });

  const onAddStart = () => setOnAdd(true);

  const onAddStop = () => setOnAdd(false);

  const onCLose = () => {
    onAdd && setOnAdd(false);
    setOpened(false);
  };

  const addWorkspace: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setOnAdd(false);
    setOpened(false);
    createWorkspace(form.values.workspace);
  };

  const openWorkspace = (w: string) => {
    onCLose();
    changeWorkspace(w);
  };

  const onOpen = () => setOpened(true);

  return {
    opened,
    onAdd,
    form,
    addWorkspace,
    openWorkspace,
    onOpen,
    onCLose,
    onAddStart,
    onAddStop,
  };
};

export default function Workspaces() {
  const { currentWorkspace, workspaces, filterWorkspace } = useWorkspaces();
  const {
    opened,
    onAdd,
    form,
    addWorkspace,
    openWorkspace,
    onOpen,
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
          <Button size="sm" variant="outline" onClick={onOpen}>
            <Text weight={500}>{currentWorkspace}</Text>
          </Button>
        </Tooltip>
      }
      onClose={onCLose}
    >
      <Stack p={0}>
        <TextInput
          icon={<MagnifyingGlassIcon />}
          placeholder="Search github username"
          onChange={(event) => filterWorkspace(event.currentTarget.value)}
        />
        <Stack spacing="xs" style={{ overflowY: 'auto', maxHeight: '200px' }}>
          {workspaces.map((name) => (
            <Button key={name} onClick={() => openWorkspace(name)} variant="subtle">
              {name}
            </Button>
          ))}
        </Stack>

        {!onAdd ? (
          <Button variant="subtle" onClick={onAddStart} leftIcon={<PlusIcon />} color="gray">
            New Collaborator
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
