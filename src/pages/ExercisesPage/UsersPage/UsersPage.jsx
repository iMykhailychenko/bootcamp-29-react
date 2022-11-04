import { useDispatch, useSelector } from 'react-redux';
import { userDeleteAction, userSearchAction } from 'redux/store';

import { UsersItem } from './UsersItem';

export const UsersPage = () => {
  const dispatch = useDispatch();
  const search = useSelector(state => state.users.search);
  const usersList = useSelector(state => state.users.usersList);

  const handleDeleteUser = id => {
    dispatch(userDeleteAction(id) /* -> {type: 'USERS_DELETE', payload: 1} */);
    // setUsersList(prevState => prevState.filter(user => user.id !== id));
  };

  const handleSearchChange = event => {
    dispatch(userSearchAction(event.target.value));
  };

  const filteredUsers = usersList.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search username"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div className="mb-5">
        {filteredUsers.map(user => (
          <UsersItem key={user.id} user={user} onDelete={handleDeleteUser} />
        ))}
      </div>
    </>
  );
};
