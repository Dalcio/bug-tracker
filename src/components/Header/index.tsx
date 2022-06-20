import { Row } from '@styles/core';
import { getUser } from '@store/user';

import ColorSchemeToggle from '@components/ColorSchemeToggle';

import { useHeaderStyles } from './Header.styles';

import Collaborators from './Collaborators';
import Notifications from './Notifications';
import SignInButton from './SignInButton';
import User from './User';
import Workspaces from './Workspaces';

export default function Header() {
  const { classes } = useHeaderStyles();
  const user = getUser();

  return (
    <Row className={classes.container} align="center" justify="space-between">
      <Workspaces />
      <Row align="center" spacing="md">
        {(!user && (
          <>
            <ColorSchemeToggle />
            <SignInButton />
          </>
        )) || (
          <>
            <ColorSchemeToggle />
            <Collaborators />
            <Notifications />
            <User />
          </>
        )}
      </Row>
    </Row>
  );
}
