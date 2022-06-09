import { useTracker } from '@components/Tracker';
import { Button } from '@mantine/core';

export default function ToggleView() {
  const { toggleView } = useTracker();

  return <Button onClick={toggleView}>ToggleView</Button>;
}
