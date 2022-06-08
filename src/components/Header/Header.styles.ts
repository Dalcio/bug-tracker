import { createStyles } from '@mantine/core';

export const useHeaderStyles = createStyles((theme) => ({
  container: {
    border: `1px solid ${theme.colors.blue[7]}`,
    borderRadius: theme.radius.md,
    alignItems: 'center',
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
