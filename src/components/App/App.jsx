import React, { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'views/Layout';
import MovieSearchForm from 'components/MovieSearchForm';

const Home = lazy(() => import('../../views/Home'));
const Movies = lazy(() => import('../../views/Movies'));
const MovieDetails = lazy(() => import('../../views/MovieDetails'));
const Cast = lazy(() => import('../../views/Cast'));
const Reviews = lazy(() => import('../../views/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<MovieSearchForm />} />
          <Route path=":movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
