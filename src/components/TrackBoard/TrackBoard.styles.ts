import { createStyles } from '@mantine/core';
import { TColors } from '@my-types/Tracker.types';

export const useTrackBoardStyles = createStyles((theme) => ({
  container: {
    flexGrow: 1,
    overflow: 'auto',
    border: `1px solid ${theme.colors.blue[7]}`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
  },
}));

export const useStatusStyles = (color: TColors) =>
  createStyles((theme) => ({
    container: {
      flexGrow: 1,
      height: '100%',
      minWidth: '254px',
      padding: 0,
      border: `1px solid ${theme.colors[color][7]}`,
      borderRadius: theme.radius.sm,
      borderTopWidth: '4px',
    },
    header: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.sm,
      borderBottom: `1px solid ${theme.colors[color][7]}`,
      textTransform: 'uppercase',
      '.add-button': {
        color: theme.colors[color][7],
      },
    },
    body: {
      flexGrow: 1,
      overflowY: 'auto',
    },
  }))();
