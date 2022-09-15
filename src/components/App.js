import { GlobalStyle } from './GlobalStyle';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('./HomePage.js'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
};
