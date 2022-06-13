import {
  CNotificationsColors,
  CNotificationsSMS,
  CNotificationsSMSType,
} from '@constants/Notifications';
import { ActionIcon, Box, Card, createStyles, Popover, Stack, Text, Tooltip } from '@mantine/core';
import { BellIcon, TrashIcon } from '@modulz/radix-icons';
import { TNotification, TNotificationType } from '@my-types/App.types';
import { Row } from '@styles/core';
import { useState } from 'react';

export const useNotificationsStyles = createStyles((theme) => ({
  targetContainer: {
    position: 'relative',
  },
  newNotification: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    background: theme.colors.green[7],
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: 1,
  },
}));

export const useNotificationStyles = (color: string) =>
  createStyles((theme) => ({
    container: {
      border: `1px solid ${theme.colors[color][7]}`,
      borderLeftWidth: '5px',
      borderRadius: theme.radius.sm,
      position: 'relative',
      width: '360px',
    },
    deleteButton: {
      position: 'absolute',
      top: theme.spacing.xs,
      right: theme.spacing.xs,
    },
  }))();

type NotificationProps = Omit<TNotification, 'desc'> & {
  details: CNotificationsSMSType;
};

function Notification({ kind, id, notifiedBy, date, details, title }: NotificationProps) {
  const { classes } = useNotificationStyles(CNotificationsColors[kind]);

  const onDelete = () => alert(id);

  return (
    <Stack p="sm" spacing="xs" className={classes.container}>
      <Text size="lg" weight={500}>
        {title}
      </Text>
      <Text size="sm">{CNotificationsSMS(details)[kind]}</Text>
      <Row justify="space-between">
        <Text size="sm">{date.toUTCString()}</Text>
        <Text size="sm" color={CNotificationsColors[kind]}>
          {notifiedBy}
        </Text>
      </Row>
      <ActionIcon
        className={classes.deleteButton}
        variant="transparent"
        color="red"
        onClick={() => onDelete()}
        size="xl"
      >
        <TrashIcon width={20} height={20} />
      </ActionIcon>
    </Stack>
  );
}

export default function Notifications() {
  const [opened, setOpened] = useState<boolean>(false);

  const newNotification = true;

  const { classes } = useNotificationsStyles();

  return (
    <Popover
      opened={opened}
      placement="end"
      target={
        <Tooltip className={classes.targetContainer} label="Notifications">
          {newNotification && <Box className={classes.newNotification} />}
          <ActionIcon
            onClick={() => setOpened((prev) => !prev)}
            size="xl"
            style={{ borderRadius: '50%' }}
          >
            <BellIcon width={20} height={20} />
          </ActionIcon>
        </Tooltip>
      }
      onClose={() => setOpened(false)}
    >
      <Stack>
        <Notification
          date={new Date()}
          id="any-id-bla-bla"
          notifiedBy="dalcio"
          title="First Notification"
          kind="add-task"
          details={{}}
        />
        <Notification
          date={new Date()}
          id="any-id-bla-bla"
          notifiedBy="dalcio"
          title="Second Notification"
          kind="delete-task"
          details={{}}
        />
      </Stack>
    </Popover>
  );
}
