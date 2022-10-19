import PropTypes from 'prop-types';

import styles from './UsersItem.module.css';

console.log(styles);

const getColor = () => {
  return Math.random() < 0.5 ? 'red' : 'green';
};

export const UsersItem = ({ user }) => {
  const { name, email, bio, skills, isOpenToWork } = user;

  const skilsStr = skills.join(', ');

  return (
    <>
      <p>Name: {name}</p>
      <p>
        Email:{' '}
        <a className={styles.link + ' ' + styles.colorRed} href={email}>
          {email}
        </a>
      </p>

      <p style={{ backgroundColor: getColor() /* -> 'red' | 'green' */ }}>BIO: {bio}</p>

      <p>Skills: {skilsStr}</p>

      <p>{isOpenToWork ? 'Open to work' : 'Not open to work'}</p>
    </>
  );
};

UsersItem.propTypes = {
  data: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    isOpenToWork: PropTypes.bool.isRequired,
  }),
};
