import { DateHandler } from '@components/TrackBoard/TaskCard/Common';
import { CPriority } from '@constants/Tracker.const';
import { Button, Checkbox, Popover, Select, Stack, Text } from '@mantine/core';
import { Calendar, DatePicker } from '@mantine/dates';
import { MixerVerticalIcon } from '@modulz/radix-icons';
import { Row } from '@styles/core';
import { ReactNode, useState } from 'react';

type FilterProps = {
  right: ReactNode;
  isFirst?: boolean;
};

function Filter({ right, isFirst }: FilterProps) {
  const [checked, setChecked] = useState(false);
  const [condition, setCondition] = useState('is');

  return (
    <Row align="center" justify="space-between">
      {(!isFirst && <Select data={['and', 'or']} />) || 'Where: '}
      <Select data={['Priority', 'Created At', 'Due date']} />
      <Select data={['is', 'is not']} />
      {right}
    </Row>
  );
}

export default function Filters() {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => setOpened((prev) => !prev);

  const onFilter = () => {
    handleOpened();
  };

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
      closeOnClickOutside={false}
    >
      <Stack>
        <Filter isFirst right={<Select data={CPriority} />} />
        <Filter right={<DatePicker />} />
        <Filter right={<DatePicker />} />
        <Button fullWidth color="gray" onClick={onFilter}>
          Ok
        </Button>
      </Stack>
    </Popover>
  );
}
