import { createStyles } from '@mantine/core';
import { TColors } from '@my-types/Tracker.types';

export const useNewTaskStyles = (color: TColors) =>
  createStyles((theme) => ({
    container: {
      border: `1px solid ${theme.colors[color][7]}`,
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
      userSelect: 'none',
      '& > *': {
        width: '100%',
      },
      '.edit-btn': {
        visibility: 'hidden',
      },
      height: '100px',
      transition: 'height 0.2s ease-in',
      '.footer': {
        transform: 'scaleY(0)',
        transition: 'transform 0.2s ease-in',
        transformOrigin: 'top',
      },
      ':hover, :active': {
        height: '166.3px',
        '.edit-btn': {
          visibility: 'visible',
        },
        '.footer': {
          transform: 'scaleY(1)',
        },
      },
    },
    tag: {
      background: theme.colors.gray[5],
      padding: '4px',
      color: theme.black,
    },
  }))();

export const useAssignedPersonStyles = createStyles(() => ({ avatar: { borderRadius: '50%' } }));
