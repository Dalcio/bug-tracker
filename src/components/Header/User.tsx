import {
  ActionIcon,
  Avatar,
  Button,
  createStyles,
  Popover,
  Stack,
  Text,
  Tooltip,
} from '@mantine/core';
import { EnvelopeClosedIcon } from '@modulz/radix-icons';
import { getUser, useAuth } from '@store/user';
import { Row } from '@styles/core';
import { useState } from 'react';

const useUserStyles = createStyles((theme) => ({
  avatar: {
    borderRadius: '50%',
  },
}));

export default function User() {
  const [opened, setOpened] = useState<boolean>(false);

  const { classes } = useUserStyles();

  const user = getUser();
  const { signOut, isLoading } = useAuth();

  if (!user) return null;

  const { email, name, username } = user;

  return (
    <Popover
      opened={opened}
      placement="end"
      target={
        <Tooltip label={name}>
          <ActionIcon
            onClick={() => setOpened((prev) => !prev)}
            size="xl"
            style={{ borderRadius: '50%' }}
          >
            <Avatar className={classes.avatar} alt={username}>
              {username.toLocaleUpperCase().substring(0, 2)}
            </Avatar>
          </ActionIcon>
        </Tooltip>
      }
      onClose={() => setOpened(false)}
    >
      <Stack align="center">
        <Avatar className={classes.avatar} size="xl" alt={username}>
          {username.toLocaleUpperCase().substring(0, 2)}
        </Avatar>
        <Text size="lg" weight={500} align="center">
          {username.toLocaleLowerCase()}
        </Text>
        <Text align="left">{name}</Text>
        <Row align="center">
          <EnvelopeClosedIcon />
          <Text>{email}</Text>
        </Row>
        <Button
          component="a"
          color="gray"
          fullWidth
          target="_blank"
          href={`https://github.com/${username}`}
        >
          View Github Profile
        </Button>
        <Button color="red" loading={isLoading} onClick={signOut} variant="subtle" fullWidth>
          Sign out
        </Button>
      </Stack>
    </Popover>
  );
}
