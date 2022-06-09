import { Box, Tabs } from '@mantine/core';
import { ListBulletIcon, ViewVerticalIcon } from '@modulz/radix-icons';
import { useTrackBoardStyles } from './TrackBoard.styles';

export default function TrackBoard() {
  const { classes } = useTrackBoardStyles();

  return (
    <Tabs classNames={{ root: classes.root, body: classes.body }}>
      <Tabs.Tab label="List" icon={<ListBulletIcon />}>
        <Box className="bordered-container">List View</Box>
      </Tabs.Tab>
      <Tabs.Tab label="Board" icon={<ViewVerticalIcon />}>
        <Box className="bordered-container">Board View</Box>
      </Tabs.Tab>
    </Tabs>
  );
}
