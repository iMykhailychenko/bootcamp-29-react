// import usersJson from '../../assets/users.json';
import usersJson from 'assets/users.json';

import { UsersItem } from './UsersItem';

export const UsersList = () => {
  return (
    <ul>
      {usersJson.map(user => {
        return (
          <li key={user.id /* unique id */}>
            <UsersItem user={user} />
            <hr />
          </li>
        );
      })}
    </ul>
  );
};
