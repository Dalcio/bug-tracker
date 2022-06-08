import { Stack } from '@mantine/core';

import Header from '@components/Header';
import TrackBoard from '@components/TrackBoard';
import Tracker from '@components/Tracker';
import TrackFilter from '@components/TrackFilter';

export default function HomePage() {
  return (
    <Stack p="md">
      <Header />
      <Tracker>
        <TrackFilter />
        <TrackBoard />
      </Tracker>
    </Stack>
  );
}
