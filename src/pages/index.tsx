import { Stack } from '@mantine/core';
import { AppStateProps, useHydrateAppState } from '@store/appState';
import { GetServerSideProps } from 'next';

import Header from '@components/Header';
import TrackBoard from '@components/TrackBoard';
import Tracker from '@components/Tracker';
import TrackOptions from '@components/TrackOptions';

type HomePageProps = {
  data: string;
};

export default function HomePage({ data }: HomePageProps) {
  useHydrateAppState(JSON.parse(data));

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

export const getServerSideProps: GetServerSideProps = async () => {
  const data: AppStateProps = {
    user: 'dalcio',
    currentWorkspace: 'bug-tracker',
    workspaces: [
      {
        collaborators: [],
        notifications: [],
        workspaceName: 'bug-tracker',
        tracker: {
          backlog: [],
          'to-do': [
            {
              createdAt: new Date(),
              id: new Date().toLocaleTimeString(),
              name: 'First Task',
              priority: 'High',
              dueDate: new Date('05-24-2023'),
            },
          ],
          doing: [],
          done: [],
        },
      },
    ],
  };

  return {
    props: {
      data: JSON.stringify(data),
    },
  };
};
