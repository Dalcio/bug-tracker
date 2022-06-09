import { Stack } from '@mantine/core';

import Header from '@components/Header';
import TrackBoard from '@components/TrackBoard';
import Tracker from '@components/Tracker';
import TrackOptions from '@components/TrackOptions';

export default function HomePage() {
  return (
    <Stack p="md" style={{ height: '100vh' }}>
      <Header />
      <Tracker>
        <TrackOptions />
        <TrackBoard />
      </Tracker>
    </Stack>
  );
}
