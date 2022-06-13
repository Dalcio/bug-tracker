import { useTracker } from '@components/Tracker';
import { Group } from '@mantine/core';
import { Row } from '@styles/core';

import Filter from './Filter';
import SearchTask from './SearchTask';

export default function TrackOptions() {
  return (
    <Row className="bordered-container" justify="space-between">
      <SearchTask />
      <Filter />
    </Row>
  );
}
