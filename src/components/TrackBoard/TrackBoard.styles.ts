import { createStyles } from '@mantine/core';

export const useTrackBoardStyles = createStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    flexGrow: 1,
    display: 'flex',
    overflow: 'auto',
    border: `1px solid ${theme.colors.blue[7]}`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
  },
  tabActive: {
    color: theme.colors.blue[7],
  },
  tabControl: {
    color: theme.colorScheme === 'light' ? theme.black : theme.white,
  },
}));
