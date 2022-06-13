import { useTracker } from '@components/Tracker';
import { Group } from '@mantine/core';
import { Row } from '@styles/core';

import Filter from './Filter';
import SearchTask from './SearchTask';
import SortBy from './SortBy';

export default function TrackOptions() {
  const { view } = useTracker();

  return (
    <Row className="bordered-container" justify="space-between">
      <SearchTask />
      <Group position="center">
        <Filter />
        {view === 1 && <SortBy />}
      </Group>
    </Row>
  );
}
