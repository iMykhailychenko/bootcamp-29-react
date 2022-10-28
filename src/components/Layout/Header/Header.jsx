import { useTheme } from 'context/theme.context';
import { PropTypes } from 'prop-types';

export const Header = ({ title }) => {
  const { setData } = useTheme();

  const handleClick = () => {
    setData(prev => [...prev, 1]);
  };

  return (
    <header className="pb-4">
      <h1>{title}</h1>
      <button onClick={handleClick} type="button">
        Context
      </button>
    </header>
  );
};

Header.propType = {
  title: PropTypes.string.isRequired,
};
