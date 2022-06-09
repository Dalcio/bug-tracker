import { Box } from '@mantine/core';
import { useTrackBoardStyles } from './TrackBoard.styles';

export default function TrackBoard() {
  const { classes } = useTrackBoardStyles();
  return <Box className={`bordered-container ${classes.container}`}>Track Board</Box>;
}
