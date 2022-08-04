import { useMedia } from 'react-use';
import { GlobalStyle } from './GlobalStyle';
import { Recipe } from './Recipe/Recipe';
import recipes from '../recipes.json';
import { Box } from './Box';

export const App = () => {
  const isDesktop = useMedia('(min-width: 768px)');

  return (
    <>
      <Box
        as="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <h1>Logo</h1>
        {isDesktop ? <h1>Desktop nav</h1> : <h1>Mobile nav</h1>}
      </Box>
      {recipes.map((recipe, idx) => (
        <Recipe key={idx} recipe={recipe} />
      ))}
      <GlobalStyle />
    </>
  );
};
