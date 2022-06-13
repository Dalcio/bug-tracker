import { Button, Popover, Text } from '@mantine/core';
import { MixerVerticalIcon } from '@modulz/radix-icons';
import { useState } from 'react';

export default function Filter() {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => setOpened((prev) => !prev);

  return (
    <Popover
      opened={opened}
      position="bottom"
      placement="start"
      gutter={-60}
      target={
        <Button variant="subtle" onClick={handleOpened} leftIcon={<MixerVerticalIcon />}>
          Filter
        </Button>
      }
      title={
        <Text size="lg" weight={700}>
          Filters
        </Text>
      }
      withCloseButton
      onClose={handleOpened}
    >
      <input />
      Filter Options
      <input data-autofocus />
      <input />
    </Popover>
  );
}
