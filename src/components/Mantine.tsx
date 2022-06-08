import { Stack, StackProps } from '@mantine/core';

export const Row = ({ style, ...props }: StackProps) => (
  <Stack {...props} style={{ ...style, flexDirection: 'row' }} />
);
