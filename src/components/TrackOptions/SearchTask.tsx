import { TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

export default function SearchTask() {
  return <TextInput placeholder="Search tasks..." icon={<MagnifyingGlassIcon />} />;
}
