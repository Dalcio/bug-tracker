import { Button, Tooltip } from '@mantine/core';
import { useAuth } from '@store/user';

export default function SignInButton() {
  const { signIn, isLoading } = useAuth();

  return (
    <Tooltip label="This functionality will be ready soon">
      <Button variant="light" disabled loading={isLoading} onClick={signIn}>
        Sign in with github
      </Button>
    </Tooltip>
  );
}
