import { useTracker } from '@components/Tracker';
import { Tabs } from '@mantine/core';
import { ListBulletIcon, ViewVerticalIcon } from '@modulz/radix-icons';

import { useTrackBoardStyles } from './TrackBoard.styles';

import BoardView from './BoardView';
import ListView from './ListView';

export default function TrackBoard() {
  const { classes } = useTrackBoardStyles();
  const { toggleView, view } = useTracker();

  return (
    <Tabs
      classNames={{
        root: classes.root,
        body: classes.body,
        tabControl: classes.tabControl,
        tabActive: classes.tabActive,
      }}
      active={view}
      onTabChange={toggleView}
      variant="unstyled"
    >
      <Tabs.Tab label="List" icon={<ListBulletIcon />}>
        <ListView />
      </Tabs.Tab>
      <Tabs.Tab label="Board" icon={<ViewVerticalIcon />}>
        <BoardView />
      </Tabs.Tab>
    </Tabs>
  );
}
