import { Button } from '@mantine/core';

export default function SignInButton() {
  const onSignIn = () => {};

  return (
    <Button variant="light" onClick={onSignIn}>
      Sign in with github
    </Button>
  );
}
