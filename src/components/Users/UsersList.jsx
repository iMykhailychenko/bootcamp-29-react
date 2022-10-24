import { Component } from 'react';

import usersJson from '../../assets/users.json';

import { UsersItem } from './UsersItem';

const USERS_LIST_LOCAL_KEY = 'users-list';

export class UsersList extends Component {
  state = {
    search: '',
    usersList: [],
    isLoading: false,
  };

  componentDidMount() {
    // стра лоадера
    this.setState({ isLoading: true });

    setTimeout(() => {
      // данні з бекенду
      const localUsersList = localStorage.getItem(USERS_LIST_LOCAL_KEY);
      if (localUsersList) {
        this.setState({ usersList: JSON.parse(localUsersList) });
      } else {
        this.setState({ usersList: usersJson });
      }

      // зупинити лоадер
      this.setState({ isLoading: false });
    }, 2000);
  }

  componentDidUpdate(_, prevState) {
    const { usersList, isLoading } = this.state;

    // this.setState({ isLoading: true });

    if (prevState.isLoading !== isLoading) {
      this.setState({ search: 'asd' });
    }

    if (prevState.usersList !== usersList) {
      localStorage.setItem(USERS_LIST_LOCAL_KEY, JSON.stringify(usersList));
    }
  }

  handleDeleteUser = id => {
    this.setState(prevState => {
      return { usersList: prevState.usersList.filter(user => user.id !== id) };
    });
  };

  handleSearchChange = event => {
    this.setState({ search: event.target.value });
  };

  render() {
    const { search, usersList, isLoading } = this.state;
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

        {isLoading && <p>Loading....</p>}

        <div className="mb-5">
          {filteredUsers.map(user => (
            <UsersItem key={user.id} user={user} onDeleteUser={this.handleDeleteUser} />
          ))}
        </div>
      </>
    );
  }
}
