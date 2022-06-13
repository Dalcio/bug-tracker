import Collaborator from '@components/Collaborator';
import { Button, createStyles, Popover, Stack, TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { useState } from 'react';

const useCollaboratorStyles = createStyles((theme) => ({}));

export default function Collaborators() {
  const [opened, setOpened] = useState<boolean>(false);

  const searchCollaborator = (text: string) => {};

  //remove the logic from this file
  const addNewCollaborator = (username: string) => {};

  return (
    <Popover
      opened={opened}
      target={
        <Button
          onClick={() => {
            setOpened(true);
          }}
        >
          Collb
        </Button>
      }
      onClose={() => setOpened(false)}
    >
      <Stack p={0}>
        <TextInput icon={<MagnifyingGlassIcon />} placeholder="Search github username" />
        <Stack spacing="xs" style={{ overflowY: 'auto', maxHeight: '200px' }}>
          <Collaborator username="dalcio" />
          <Collaborator username="ezedcode" />
          <Collaborator username="etcode" />
          <Collaborator username="ethacode" />
          <Collaborator username="ethacode" />
          <Collaborator username="ethacode" />
          <Collaborator username="ethacode" />
          <Collaborator username="ethacode" />
          <Collaborator username="ethacode" />
          <Collaborator username="ethacode" />
        </Stack>
      </Stack>
    </Popover>
  );
}
