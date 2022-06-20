import { Button } from '@mantine/core';
import { useAuth } from '@store/user';

export default function SignInButton() {
  const { signIn, isLoading } = useAuth();

  return (
    <Button variant="light" loading={isLoading} onClick={signIn}>
      Sign in with github
    </Button>
  );
}
