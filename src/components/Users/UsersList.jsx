import { useState, useCallback, useMemo } from 'react';

import usersJson from '../../assets/users.json';

import { UsersItem } from './UsersItem';

export const UsersList = () => {
  const [search, setSearch] = useState('');
  const [usersList, setUsersList] = useState(usersJson);

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

  // const sum = 1 + 3;

  // 'asdf'.includes('f') -> true
  // for asdf -> true

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
          <UsersItem key={user.id} user={user} onDeleteUser={handleDeleteUser} />
        ))}
      </div>
    </>
  );
};

// const cache = {
// '1,2': 4
// };

// const sum = useMemo(a, b) => a + b;

// sum(1, 2); // 3
// sum(1, 3); // 4
// sum(1, 2); // 3
// sum(1, 2); // 3
// sum(2, 2); // 4
// sum(2, 2); // 4

// {} === {} -> false
// (() => {}) === (() => {}) -> false

// export class UsersList extends Component {
//   state = {
//     search: '',
//     usersList: usersJson,
//   };

//   handleDeleteUser = id => {
//     this.setState(prevState => {
//       return { usersList: prevState.usersList.filter(user => user.id !== id) };
//     });
//   };

//   handleSearchChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   render() {
//     const { search, usersList } = this.state;
//     const filteredUsers = usersList.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

//     return (
//       <>
//         <div className="input-group mb-3">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Search username"
//             value={search}
//             onChange={this.handleSearchChange}
//           />
//         </div>

//         <div className="mb-5">
//           {filteredUsers.map(user => (
//             <UsersItem key={user.id} user={user} onDeleteUser={this.handleDeleteUser} />
//           ))}
//         </div>
//       </>
//     );
//   }
// }
