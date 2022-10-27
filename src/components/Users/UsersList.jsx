import { Component } from 'react';

import usersJson from '../../assets/users.json';

import { UsersItem } from './UsersItem';

export class UsersList extends Component {
  state = {
    search: '',
    usersList: usersJson,
  };

  handleDeleteUser = id => {
    this.setState(prevState => {
      return { usersList: prevState.usersList.filter(user => user.id !== id) };
    });
  };

  handleSearchChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, usersList } = this.state;
    const filteredUsers = usersList.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));

    return (
      <>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search username"
            value={search}
            onChange={this.handleSearchChange}
          />
        </div>

        <div className="mb-5">
          {filteredUsers.map(user => (
            <UsersItem key={user.id} user={user} onDeleteUser={this.handleDeleteUser} />
          ))}
        </div>
      </>
    );
  }
}
