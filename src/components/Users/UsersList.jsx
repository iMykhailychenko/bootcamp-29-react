import usersJson from '../../assets/users.json';

import { UsersItem } from './UsersItem';
import { useUserList } from './hook';

export const UsersList = () => {
  const { search, usersList, changeSearch, deletUser } = useUserList(usersJson);

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search username"
          value={search}
          onChange={changeSearch}
        />
      </div>

      <div className="mb-5">
        {usersList.map(user => (
          <UsersItem key={user.id} user={user} onDeleteUser={deletUser} />
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
