import { Row } from '@styles/core';
import { useHeaderStyles } from './Header.styles';

import ColorSchemeToggle from '@components/ColorSchemeToggle';

import Collaborators from './Collaborators';
import Notifications from './Notifications';
import SignInButton from './SignInButton';
import User from './User';
import Workspaces from './Workspaces';

export default function Header() {
  const { classes } = useHeaderStyles();

  const isSigned = true;

  return (
    <Row className={classes.container} justify={(isSigned && 'space-between') || 'end'}>
      {(!isSigned && (
        <>
          <ColorSchemeToggle />
          <SignInButton />
        </>
      )) || (
        <>
          <Workspaces />
          <Row spacing="md">
            <ColorSchemeToggle />
            <Collaborators />
            <Notifications />
            <User me />
          </Row>
        </>
      )}
    </Row>
  );
}
