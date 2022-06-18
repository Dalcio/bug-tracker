import { TextInput } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import { useSearchTask } from '@store/tracker';

export default function SearchTask() {
  const [name, setName] = useSearchTask();

  return (
    <TextInput
      value={name}
      onChange={(value) => setName(value.currentTarget.value)}
      placeholder="Search tasks..."
      icon={<MagnifyingGlassIcon />}
    />
  );
}
