import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredUsers, selectUserSearch } from 'redux/users/selectors.users';
import { userDeleteAction, userSearchAction } from 'redux/users/slice.users';

import { UsersItem } from './UsersItem';

export const UsersPage = () => {
  const dispatch = useDispatch();

  // До
  // const search = useSelector(state => state.users.search);

  // Післ
  // const selectUserSearch = state => state.users.search;

  const search = useSelector(selectUserSearch); // '' -> ''
  const usersList = useSelector(selectFilteredUsers); // [] -> [] -> re-render

  const handleDeleteUser = id => {
    dispatch(userDeleteAction(id));
  };

  const handleSearchChange = event => {
    dispatch(userSearchAction(event.target.value));
  };

  console.log('UsersPage');

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
        {usersList.map(user => (
          <UsersItem key={user.id} user={user} onDelete={handleDeleteUser} />
        ))}
      </div>
    </>
  );
};
