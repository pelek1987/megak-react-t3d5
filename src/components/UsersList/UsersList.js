import { User } from "../User";
import {List} from '@mui/material';

export const UsersList = ({ users }) => {

  return (
    <List>
      {users && users.map((user) => <User key={user.email} userData={user} />)}
    </List>
  );
};
