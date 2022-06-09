import { Group } from '@mantine/core';
import { Row } from '@styles/core';

import Filter from './Filter';
import SearchTask from './SearchTask';
import SortBy from './SortBy';

export default function TrackOptions() {
  return (
    <Row className="bordered-container" justify="space-between">
      <SearchTask />
      <Group position="center">
        <Filter />
        <SortBy />
      </Group>
    </Row>
  );
}
