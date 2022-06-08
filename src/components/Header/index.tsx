import { Row } from '@components/Mantine';
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
    <Row className={classes.container} p="sm" justify={(isSigned && 'space-between') || 'end'}>
      {(!isSigned && <SignInButton />) || (
        <>
          <Workspaces />
          <Row spacing="md">
            <ColorSchemeToggle />
            <Collaborators />
            <Notifications />
            <User />
          </Row>
        </>
      )}
    </Row>
  );
}
