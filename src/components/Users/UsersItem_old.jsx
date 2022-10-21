import classNames from 'classnames';
import { PropTypes } from 'prop-types';

import styles from './UsersItem.module.css';

export const UsersItem = ({ user, onDeleteUser }) => {
  const { id, name, email, bio, skills, isOpenToWork } = user;

  const handleDelete = () => {
    onDeleteUser(id);
  };

  return (
    <div className="card my-3">
      <div className="card-body">
        <h5 className="card-title d-flex">
          {name}
          {/* <p
            className={`${styles.openToWork} ${styles.myClass} ${null} ${styles.myClass2} ${styles.myClass3} ${
              isOpenToWork ? styles.green : styles.red
            }`}
          /> */}
          <p className={classNames(styles.openToWork, isOpenToWork ? styles.green : styles.red)} />
        </h5>

        <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        <p className="card-text">{bio}</p>

        <div className="d-flex mb-2">
          {skills.map(skil => (
            <span key={skil} className="badge bg-dark me-1">
              {skil}
            </span>
          ))}
        </div>

        <div className="d-flex">
          <button type="button" className="card-link btn-link" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

UsersItem.propTypes = {
  user: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string.isRequired),
    isOpenToWork: PropTypes.bool.isRequired,
  }).isRequired,
};
