import { createStyles } from '@mantine/core';
import { TColors } from '@my-types/Tracker.types';
import { useResize } from './util';

export const useTrackBoardStyles = createStyles((theme) => ({
  container: {
    flexGrow: 1,
    overflowX: 'auto',
    maxHeight: `calc(100vh - 70px - 62px - 4 *${theme.spacing.md}px)`,
    border: `1px solid ${theme.colors.blue[7]}`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
  },
}));

export const useStatusStyles = (color: TColors) => {
  const { width } = useResize();

  return createStyles((theme) => ({
    container: {
      flexGrow: 1,
      height: '100%',
      minWidth: '254px',
      maxWidth: `calc(${width} - ${theme.spacing.md}px)`,
      padding: 0,
      border: `1px solid ${theme.colors[color][7]}`,
      borderRadius: theme.radius.sm,
      borderTopWidth: '4px',
    },
    header: {
      height: '69px',
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
    draggableSpace: {
      minHeight: '50px',
    },
  }))();
};
