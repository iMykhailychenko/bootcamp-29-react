import { useCallback, useMemo, useState } from 'react';

export const useUserList = defaultUsersList => {
  const [search, setSearch] = useState('');
  const [usersList, setUsersList] = useState(defaultUsersList);

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };

  const handleDeleteUser = useCallback(id => {
    setUsersList(prevState => {
      return prevState.filter(user => user.id !== id);
    });
  }, []);

  const filteredUsers = useMemo(() => {
    return usersList.filter(user => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [usersList, search]);

  return {
    search,
    usersList: filteredUsers,
    changeSearch: handleSearchChange,
    deletUser: handleDeleteUser,
  };
};
