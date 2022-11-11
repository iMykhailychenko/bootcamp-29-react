import { useSelector } from 'react-redux';

import { Status } from 'constants/fetch-status';

export const UserCard = () => {
  const profile = useSelector(state => state.profile);

  if (profile.status === Status.Loading || profile.status === Status.Init) {
    return <p>Loading ...</p>;
  }

  if (profile.status === Status.Error) {
    return <p>Error</p>;
  }

  return (
    <div className="list-group-item list-group-item-action py-3 mb-4">
      <div className="d-flex w-100 align-items-center">
        <img
          alt=""
          width="80px"
          height="80px"
          className="d-block"
          src={profile.data.avatar ?? '/bootcamp-29-react/user.png'}
          style={{ borderRadius: '50%', boxSizing: 'border-box' }}
        />
        <div className="ms-3 d-flex flex-column">
          <strong className="mb-1">
            {profile.data.first_name} {profile.data.last_name}
          </strong>
          <small className="text-muted">{profile.data.email}</small>
        </div>
      </div>
    </div>
  );
};
