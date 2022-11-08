import { createSelector } from '@reduxjs/toolkit';

export const selectUserSearch = state => state.users.search;
export const selectUsersList = state => state.users.usersList;

// export const selectFilteredUsers = state => {
//   console.log('selectFilteredUsers');
//   const search = selectUserSearch(state);
//   const usersList = selectUsersList(state);

//   return usersList.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
// };

// selectFilteredUsers('', [...]) -> [...]
// selectFilteredUsers('a', [...]) -> [..]
// selectFilteredUsers('', [...]) -> [...]

export const selectFilteredUsers = createSelector([selectUserSearch, selectUsersList], (search, usersList) => {
  console.log('selectFilteredUsers');
  return usersList.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
});
