import { Global } from '@mantine/core';

const GlobalStyles = () => (
  <Global
    styles={(theme) => ({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },

      '.bordered-container': {
        border: `1px solid ${theme.colors.blue[7]}`,
        borderRadius: theme.radius.md,
        alignItems: 'center',
        padding: theme.spacing.sm,
      },

      //   body: {
      //     ...theme.fn.fontStyles(),
      //     backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      //     color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
      //     lineHeight: theme.lineHeight,
      //   },
    })}
  />
);

export default GlobalStyles;
