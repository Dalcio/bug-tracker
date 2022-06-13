import { ActionIcon, Group, Tooltip, useMantineColorScheme } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

export default function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <Tooltip label={`Change theme to ${colorScheme === 'dark' ? 'light' : 'dark'}`}>
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="xl"
          sx={(theme) => ({
            color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[7],
            borderRadius: '50%',
          })}
        >
          {colorScheme === 'dark' ? (
            <SunIcon width={20} height={20} />
          ) : (
            <MoonIcon width={20} height={20} />
          )}
        </ActionIcon>
      </Tooltip>
    </Group>
  );
}
