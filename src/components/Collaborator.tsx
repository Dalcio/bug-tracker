import { Avatar, Button, createStyles, Text } from '@mantine/core';
import { Row } from '@styles/core';

type CollaboratorProps = {
  username: string;
  onClick?: (username: string) => void;
};

const useCollaboratorStyles = createStyles((theme) => ({
  avatar: {
    borderRadius: '50%',
  },
}));

export default function Collaborator({ username, onClick }: CollaboratorProps) {
  const { classes } = useCollaboratorStyles();

  const handleClick = () => {
    if (onClick) onClick(username);
  };

  return (
    <Button
      style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
      variant="subtle"
      onClick={handleClick}
      pl={0}
      size="lg"
    >
      <Avatar className={classes.avatar} alt={username} mr="sm">
        {username.substring(0, 2).toLocaleUpperCase()}
      </Avatar>
      <Text>{username}</Text>
    </Button>
  );
}
