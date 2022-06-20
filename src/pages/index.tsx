import { Stack } from '@mantine/core';
import { TApp } from '@my-types/App.types';
import { useHydrateAppState } from '@store/appState';
import { Row } from '@styles/core';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { v4 } from 'uuid';

import Header from '@components/Header';
import TrackBoard from '@components/TrackBoard';
import Tracker from '@components/Tracker';
import SearchTask from '@components/TrackBoard/SearchTask';

type HomePageProps = {
  data: string;
};

export default function HomePage({ data }: HomePageProps) {
  useHydrateAppState(JSON.parse(data));
  const [windowIsReady, setWindowIsReady] = useState(false);

  useEffect(() => {
    if (!windowIsReady) {
      setWindowIsReady(true);
    }
  }, []);

  return (
    (windowIsReady && (
      <Stack p="md" style={{ height: '100vh' }}>
        <Header />
        <Tracker>
          <Row className="bordered-container" justify="space-between">
            <SearchTask />
          </Row>
          <TrackBoard />
        </Tracker>
      </Stack>
    )) ||
    null
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // if authenticated get from firebase

  // else get from cookies if there's a workspace else set empty
  const data: TApp = {
    user: undefined,
    currentWorkspace: ['bug-tracker', 0],
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
              id: v4(),
              name: 'First Task',
              priority: 'High',
              dueDate: new Date('05-24-2023'),
            },
            {
              createdAt: new Date(),
              id: v4(),
              name: 'Second Task',
              priority: 'Low',
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
