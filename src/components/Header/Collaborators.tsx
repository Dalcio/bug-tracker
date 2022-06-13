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

export default function Collaborators() {
  const [opened, setOpened] = useState<boolean>(false);
  const [onAdd, setOnAdd] = useState<boolean>(false);

  const form = useForm({ initialValues: { email: '' } });

  const { classes } = useCollaboratorStyles();

  const searchCollaborator = (text: string) => {};

  const onAddStart = () => setOnAdd(true);

  const addNewCollaborator: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setOnAdd(false);
    setOpened(false);
    alert(`An email will be sent to ${form.values.email}`);
  };

  return (
    <Popover
      placement="end"
      opened={opened}
      target={
        <Tooltip label="Collaborators">
          <button className={classes.targetWrapper} onClick={() => setOpened((prev) => !prev)}>
            <Box className={classes.targetContainer}>
              <Text weight={500}>CB</Text>
            </Box>
          </button>
        </Tooltip>
      }
      onClose={() => setOpened(false)}
    >
      <Stack p={0}>
        <TextInput
          icon={<MagnifyingGlassIcon />}
          placeholder="Search github username"
          onChange={(event) => searchCollaborator(event.currentTarget.value)}
        />
        <Stack spacing="xs" style={{ overflowY: 'auto', maxHeight: '200px' }}>
          <Collaborator username="dalcio" />
          <Collaborator username="ezedcode" />
          <Collaborator username="etcode" />
        </Stack>

        {!onAdd ? (
          <Button variant="subtle" onClick={onAddStart} leftIcon={<PlusIcon />} color="gray">
            New Collaborator
          </Button>
        ) : (
          <form onSubmit={addNewCollaborator}>
            <Row spacing="xs" align="center">
              <Tooltip label="Cancel">
                <CloseButton onClick={() => setOnAdd(false)} />
              </Tooltip>
              <TextInput
                placeholder="Github user email"
                value={form.values.email}
                type="email"
                required
                icon={<EnvelopeClosedIcon />}
                onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              />
              <Button type="submit">Add</Button>
            </Row>
          </form>
        )}
      </Stack>
    </Popover>
  );
}
