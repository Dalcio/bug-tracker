import { createStyles } from '@mantine/core';

import { Colors } from './BoardView.types';

export const useStatusStyles = (color: Colors) =>
  createStyles((theme) => ({
    container: {
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
      padding: theme.spacing.sm,
    },
  }))();
