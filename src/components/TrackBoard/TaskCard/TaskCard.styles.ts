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

export const useTaskCardStyles = (color: TColors) =>
  createStyles((theme) => ({
    container: {
      borderColor: `${theme.colors[color][7]}!important`,
      borderRadius: '0!important',
      cursor: 'pointer',
      '.footer': {
        display: 'none',
      },
      ':hover .footer': {
        display: 'block',
      },
    },
    tag: {
      background: theme.colors.gray[5],
      padding: '4px',
      color: theme.black,
    },
  }))();

export const useAssignedPersonStyles = createStyles(() => ({ avatar: { borderRadius: '50%' } }));
