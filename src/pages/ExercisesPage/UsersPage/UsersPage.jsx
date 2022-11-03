import { useState } from 'react';

import usersJson from 'assets/users.json';

import { UsersItem } from './UsersItem';

export const UsersList = () => {
  const [search, setSearch] = useState('');
  const [usersList, setUsersList] = useState(usersJson);

  const handleDeleteUser = id => {
    setUsersList(prevState => prevState.usersList.filter(user => user.id !== id));
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
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
