import { createStyles } from '@mantine/core';

export const useHeaderStyles = createStyles((theme) => ({
  container: {
    border: `1px solid ${theme.colors.blue[7]}`,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    padding: theme.spacing.sm,
  },
  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
}));

export const useCollaboratorStyles = createStyles((theme) => ({
  targetWrapper: {
    border: 'unset',
    background: 'transparent',
    cursor: 'pointer',
    position: 'relative',
    ':hover': {
      opacity: '0.6',
    },
    ':after, :before': {
      content: '""',
      position: 'absolute',
      border: `1px dashed ${theme.colors.blue[7]}`,
      borderRadius: '50%',
      height: '28px',
      width: '28px',
      top: '4px',
    },
    ':after': {
      left: 'calc(50% - 4px)',
    },
    ':before': {
      right: 'calc(50% - 4px)',
    },
  },
  targetContainer: {
    position: 'relative',
    zIndex: 1,
    background: theme.colorScheme === 'dark' ? '#1A1B1E' : theme.white,
    color: theme.colors.blue[7],
    border: `1px solid ${theme.colors.blue[7]}`,
    borderRadius: '50%',
    height: '36px',
    width: '36px',
    display: 'grid',
    placeItems: 'center',
    '*': {
      display: 'inline-block',
    },
  },
}));
