import { PropTypes } from 'prop-types';

export const Header = ({ title }) => {
  return (
    <header className="pb-4">
      <h1>{title}</h1>
    </header>
  );
};

Header.propType = {
  title: PropTypes.string.isRequired,
};
