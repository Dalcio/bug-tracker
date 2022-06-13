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

  const user = 'Dalcio';
  const name = 'Dálcio Garcia';
  const email = 'dalciomacuetegarcia@gmail.com';

  return (
    <Popover
      opened={opened}
      placement="end"
      target={
        <Tooltip label={user}>
          <ActionIcon
            onClick={() => setOpened((prev) => !prev)}
            size="xl"
            style={{ borderRadius: '50%' }}
          >
            <Avatar className={classes.avatar} alt={user}>
              {user.toLocaleUpperCase().substring(0, 2)}
            </Avatar>
          </ActionIcon>
        </Tooltip>
      }
      onClose={() => setOpened(false)}
    >
      <Stack align="center">
        <Avatar className={classes.avatar} size="xl" alt={user}>
          {user.toLocaleUpperCase().substring(0, 2)}
        </Avatar>
        <Text size="lg" weight={500} align="center">
          {user.toLocaleLowerCase()}
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
          href={`https://github.com/${user}`}
        >
          View Profile
        </Button>
      </Stack>
    </Popover>
  );
}
