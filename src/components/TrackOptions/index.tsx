import { Row } from '@styles/core';

import Filter from './Filter';
import ToggleView from './ToggleView';

export default function TrackOptions() {
  return (
    <Row className="bordered-container" justify="space-between">
      <ToggleView />
      <Filter />
    </Row>
  );
}
