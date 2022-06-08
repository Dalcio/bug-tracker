import { useDarkMode } from 'storybook-dark-mode';
import { MantineProvider, ColorSchemeProvider, Box } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <ColorSchemeProvider colorScheme="light" toggleColorScheme={() => {}}>
      <MantineProvider
        theme={{ colorScheme: useDarkMode() ? 'dark' : 'light' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Box p="lg">
          <NotificationsProvider>{props.children}</NotificationsProvider>
        </Box>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
