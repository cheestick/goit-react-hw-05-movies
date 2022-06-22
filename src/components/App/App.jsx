import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from 'components/Views/Layout';
import { Home, Movie, Movies } from 'components/Views';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<h1>The Movies</h1>} />
          <Route path=":movieId" element={<Movie />}>
            <Route path="cast" element={<h3>Cast</h3>} />
            <Route path="review" element={<h3>Review</h3>} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
