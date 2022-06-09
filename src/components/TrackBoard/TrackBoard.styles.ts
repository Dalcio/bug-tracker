import { createStyles } from '@mantine/core';

export const useTrackBoardStyles = createStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    '.bordered-container': {
      flexGrow: 1,
    },
  },
  body: {
    flexGrow: 1,
    display: 'flex',
  },
}));
