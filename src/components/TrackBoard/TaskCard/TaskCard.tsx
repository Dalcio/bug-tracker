import { useTracker } from '@components/Tracker';
import { ActionIcon, Avatar, Box, Card, Popover, Skeleton, Stack, Text } from '@mantine/core';
import { TextAlignJustifyIcon, TrashIcon } from '@modulz/radix-icons';
import { TColors, TTask } from '@my-types/Tracker.types';
import { Row } from '@styles/core';
import { useEffect, useState } from 'react';

import { DateHandler, Priority } from './Common';
import { useTaskCardStyles } from './TaskCard.styles';

type TaskCardProps = Omit<TTask, 'desc'> & {
  color: TColors;
  workspace: string;
};

type DescriptionProps = { id?: string | undefined };

function Description({ id }: DescriptionProps) {
  const [opened, setOpened] = useState(false);
  const [desc, setDesc] = useState('');

  //remove  letter
  useEffect(() => {
    if (!desc) {
      const getTaskDesc = () =>
        setTimeout(() => {
          setDesc('bla bla bla bla bla bla bla bla bla bla');
        }, 6 * 1000);

      const timeout = getTaskDesc();

      return () => clearTimeout(timeout);
    }
  }, [desc]);

  return (
    <Popover
      opened={opened}
      target={
        <ActionIcon onMouseOver={() => setOpened(true)} onMouseOut={() => setOpened(false)}>
          <TextAlignJustifyIcon />
        </ActionIcon>
      }
      style={{ maxWidth: '200px' }}
    >
      <Stack>
        {(desc && desc.length > 0 && <Text>{desc}</Text>) || (
          <>
            <Skeleton width={200} height={16} />
            <Skeleton width={150} height={16} />
            <Skeleton width={180} height={16} />
            <Skeleton width={200} height={16} />
          </>
        )}
      </Stack>
    </Popover>
  );
}

export default function TaskCard({
  assignedTo,
  createdAt,
  id,
  name,
  priority,
  tags,
  dueDate,
  color,
  workspace,
}: TaskCardProps) {
  const [isMouseOver, setIsMouseOver] = useState<boolean>(false);

  const { editTask } = useTracker();
  const { classes } = useTaskCardStyles(color);

  const onDelete = (_id: string) => {
    throw new Error('Create the delete function');
  };

  return (
    <Card
      component="button"
      className={`bordered-container ${classes.container}`}
      onClick={() => editTask(id)}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Stack spacing={0}>
        <Text size="xs" align="left" color="gray">
          {workspace}
        </Text>
        <Row justify="space-between" align="center">
          <Text size="md" weight={500} align="left">
            {name}
          </Text>
          <Avatar alt={assignedTo} style={{ borderRadius: '50%' }}>
            {assignedTo.toLocaleUpperCase().substring(0, 2)}
          </Avatar>
        </Row>
        {isMouseOver && (
          <Stack p={0} spacing="xs">
            <Row spacing={'xs'} justify="space-between" align="center">
              <Row style={{ flexWrap: 'wrap' }} spacing={'xs'}>
                {tags &&
                  tags.map((tag) => (
                    <Box key={tag} className={classes.tag}>
                      <Text size="xs">{tag}</Text>
                    </Box>
                  ))}
              </Row>
              <Description id={id} />
            </Row>
            <Row align="center" justify="space-between">
              <Row>
                <Priority current={priority} label={priority} />
                <DateHandler withHover label="Created At" date={createdAt} />
                {dueDate && <DateHandler withHover label="Due date" date={dueDate} />}
              </Row>
              <ActionIcon color="red" onClick={() => onDelete(id)}>
                <TrashIcon />
              </ActionIcon>
            </Row>
          </Stack>
        )}
      </Stack>
    </Card>
  );
}
