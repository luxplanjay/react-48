import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { RecipeInfo } from '../RecipeInfo/RecipeInfo';
import { InfoContainer, RecipeName } from './Recipe.styled';
import { Box } from 'components/Box';
import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';

export const Recipe = ({
  recipe: { name, time, servings, calories, difficulty },
}) => {
  return (
    <Box p={3}>
      <RecipeName>{name}</RecipeName>
      <InfoContainer>
        <RecipeInfo text={`${time} min`} icon={BsAlarm} />
        <RecipeInfo text={`${servings} servings`} icon={HiOutlineChartPie} />
        <RecipeInfo text={`${calories} calories`} icon={HiOutlineChartBar} />
      </InfoContainer>
      <RecipeDifficulty difficulty={difficulty} />
    </Box>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf([0, 1, 2]).isRequired,
  }).isRequired,
};
