import { Header } from '@components/Header';
import { TrackBoard } from '@components/TrackBoard';
import { Tracker } from '@components/Tracker';
import { TrackFilter } from '@components/TrackFilter';
import { Stack } from '@mantine/core';

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
