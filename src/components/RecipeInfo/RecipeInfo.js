import PropTypes from 'prop-types';
import { InfoWrapper } from './RecipeInfo.styled';

export const RecipeInfo = ({ icon: Icon, text }) => {
  return (
    <InfoWrapper>
      <Icon size={24} />
      <p>{text}</p>
    </InfoWrapper>
  );
};

RecipeInfo.propTypes = {
  icon: PropTypes.elementType.isRequired,
  text: PropTypes.string.isRequired,
};
