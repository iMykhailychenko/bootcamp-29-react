import PropTypes from 'prop-types';

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "email": "Sincere@april.biz",
//     "bio": "Assumenda harum mollitia neque, officiis veniam repellat sapiente delectus aspernatur",
//     "skils": ["react", "vue"],
//     "isOpenToWork": false
//   },

export const UsersItem = ({ user }) => {
  const { name, email, bio, skills, isOpenToWork } = user;

  const skilsStr = skills.join(', ');

  return (
    <>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>BIO: {bio}</p>

      <p>Skills: {skilsStr}</p>

      <p>{isOpenToWork ? 'Open to work' : 'Not open to work'}</p>
    </>
  );
};

UsersItem.propTypes = {
  //   data: PropTypes.shape({
  //     name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     bio: PropTypes.string.isRequired,
  //     skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  //     isOpenToWork: PropTypes.bool.isRequired,
  //   }),
  data: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    isOpenToWork: PropTypes.bool.isRequired,
  }),
  //   data: {
  //     name: PropTypes.string.isRequired,
  //     email: PropTypes.string.isRequired,
  //     bio: PropTypes.string.isRequired,
  //     skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  //     isOpenToWork: PropTypes.bool.isRequired,
  //   },
};
