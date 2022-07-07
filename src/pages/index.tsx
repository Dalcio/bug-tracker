import { Alert, Stack } from '@mantine/core';
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
import { ExclamationTriangleIcon } from '@modulz/radix-icons';

type HomePageProps = {
  data: string;
};

const useWindowIsReady = () => {
  const [windowIsReady, setWindowIsReady] = useState(false);

  useEffect(() => {
    if (!windowIsReady) {
      setWindowIsReady(true);
    }
  }, []);

  return { windowIsReady };
};

export default function HomePage({ data }: HomePageProps) {
  useHydrateAppState(JSON.parse(data));
  const { windowIsReady } = useWindowIsReady();

  const [closeAlert, setCloseAlert] = useState<boolean>(true);

  return (
    (windowIsReady && (
      <Stack p="md" style={{ height: '100vh' }}>
        <Header />
        {closeAlert && (
          <Alert
            icon={<ExclamationTriangleIcon />}
            title="Alert!"
            color="red"
            withCloseButton
            p="md"
            variant="outline"
            onClose={() => setCloseAlert(false)}
          >
            This web application still under development.
          </Alert>
        )}
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
          'to-do': [],
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
