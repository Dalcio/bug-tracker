import { createStyles } from '@mantine/core';
import { TColors } from '@my-types/Tracker.types';

export const useNewTaskStyles = (color: TColors) =>
  createStyles((theme) => ({
    container: {
      borderColor: `${theme.colors[color][7]}!important`,
    },
    header: {
      width: '100%',
      alignItems: 'center',
    },
    footer: {
      alignItems: 'center',
      width: '100%',
    },
    save: {
      ':not(:disabled)': {
        background: `${theme.colors[color][7]}!important`,
      },
    },
  }))();
